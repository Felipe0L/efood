import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'

import Button from '../Button'
import Card from '../Card'

import { formataPreco } from '../FoodsList'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  PricesContainer,
  CartItem,
  InputGroup,
  InputGroupContainer,
  DeliverDataContainer,
  PaymentDataContainer,
  ConfirmationP
} from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, order } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [cartDisplay, setCartDisplay] = useState(true)
  const [deliverDisplay, setDeliverDisplay] = useState(false)
  const [paymentDisplay, setpaymentDisplay] = useState(false)
  const [confirmationDisplay, setConfirmationDisplay] = useState(false)

  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiverName: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      aditionalData: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiverName: Yup.string()
        .min(4, 'O campo precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O campo precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O campo precisa ter no mínimo 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter no mínimo 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().min(2).required('O campo é obrigatório'),
      cardName: Yup.string().min(5).required('O campo é obrigatório'),
      cardNumber: Yup.string().min(5).required('O campo é obrigatório'),
      cardCode: Yup.string().min(3).required('O campo é obrigatório'),
      expiresMonth: Yup.string().min(2).required('O campo é obrigatório'),
      expiresYear: Yup.string().min(2).required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: order.map((item) => ({
          id: item.id,
          price: item.price
        })),
        delivery: {
          receiver: values.receiverName,
          adress: {
            city: values.city,
            description: values.adress,
            number: Number(values.number),
            zipCode: values.cep,
            complement: values.aditionalData
          }
        },
        payment: {
          card: {
            code: Number(values.cardCode),
            name: values.cardName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const closeCart = () => {
    dispatch(close())
  }

  const removeOrder = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return order.reduce((accumulator, currentItem) => {
      if (currentItem.price) {
        return (accumulator += currentItem.price)
      }
      return 0
    }, 0)
  }

  const clearCart = () => {
    dispatch(clear())
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  console.log(form)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {cartDisplay && (
          <>
            <ul>
              {order.map((pedido) => (
                <CartItem key={pedido.id}>
                  <img src={pedido.image} />
                  <div>
                    <h3>{pedido.name}</h3>
                    <Prices>{formataPreco(pedido.price)}</Prices>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeOrder(pedido.id)}
                  />
                </CartItem>
              ))}
            </ul>
            <PricesContainer>
              <Prices>Valor total </Prices>
              <Prices>{formataPreco(getTotalPrice())}</Prices>
            </PricesContainer>
            <Button
              onClick={() => {
                if (order.length > 0) {
                  setCartDisplay(false)
                  setDeliverDisplay(true)
                }
              }}
              type="button"
              title="Clique aqui para continuar a entrega"
            >
              Continuar com a entrega
            </Button>
          </>
        )}
        {deliverDisplay && (
          <Card>
            <DeliverDataContainer>
              <h2>Entrega</h2>
              <InputGroup>
                <label htmlFor="receiverName">Quem irá receber</label>
                <input
                  id="receiverName"
                  type="text"
                  name="receiverName"
                  value={form.values.receiverName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiverName') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="adress">Endereço</label>
                <input
                  id="adress"
                  type="text"
                  name="adress"
                  value={form.values.adress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('adress') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroupContainer>
                <InputGroup maxwidth="155px">
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    id="cep"
                    type="text"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    mask="99999-999"
                  />
                </InputGroup>
                <InputGroup maxwidth="155px">
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    type="text"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </InputGroup>
              </InputGroupContainer>
              <InputGroup className="margin-bottom">
                <label htmlFor="aditionalData">Complemento (opcional)</label>
                <input
                  id="aditionalData"
                  type="text"
                  name="aditionalData"
                  value={form.values.aditionalData}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('aditionalData') ? 'error' : ''}
                />
              </InputGroup>
              <Button
                title="Clique para continuar com o pagamento"
                type="button"
                onClick={() => {
                  if (
                    checkInputHasError('receiverName') ||
                    checkInputHasError('adress') ||
                    checkInputHasError('city') ||
                    checkInputHasError('cep') ||
                    checkInputHasError('number') ||
                    !form.dirty
                  ) {
                    alert(
                      'Preencha os campos de entrega obrigatórios e tente novamente'
                    )
                  } else {
                    setDeliverDisplay(false)
                    setpaymentDisplay(true)
                  }
                  console.log(checkInputHasError('receiverName'))
                  console.log(checkInputHasError('adress'))
                  console.log(checkInputHasError('city'))
                  console.log(checkInputHasError('cep'))
                  console.log(checkInputHasError('number'))
                }}
              >
                Continuar com o pagamento
              </Button>
              <Button
                onClick={() => {
                  setDeliverDisplay(false)
                  setCartDisplay(true)
                }}
                title="Clique para voltar para o carrinho"
                type="button"
              >
                Voltar para o carrinho
              </Button>
            </DeliverDataContainer>
          </Card>
        )}
        {paymentDisplay && (
          <Card>
            <PaymentDataContainer>
              <h2>{`Pagamento - Valor a pagar ${formataPreco(
                getTotalPrice()
              )}`}</h2>
              <InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  id="cardName"
                  type="text"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroupContainer>
                <InputGroup maxwidth="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </InputGroup>
                <InputGroup maxwidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    id="cardCode"
                    type="text"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </InputGroup>
              </InputGroupContainer>
              <InputGroupContainer>
                <InputGroup maxwidth="155px">
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    id="expiresMonth"
                    type="text"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </InputGroup>
                <InputGroup maxwidth="155px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    id="expiresYear"
                    type="text"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                  />
                </InputGroup>
              </InputGroupContainer>
              <Button
                onClick={() => {
                  if (form.isValid) {
                    setpaymentDisplay(false)
                    setConfirmationDisplay(true)
                    form.handleSubmit()
                  } else {
                    alert('Preencha os campos obrigatorios e tente novamente.')
                  }
                }}
                title="Clique para finalizar o pagamento"
                type="submit"
              >
                Finalizar pagamento
              </Button>
              <Button
                title="Clique para voltar para a edição de endereço"
                type="button"
                onClick={() => {
                  setpaymentDisplay(false)
                  setDeliverDisplay(true)
                }}
              >
                Voltar para a edição de endereço
              </Button>
            </PaymentDataContainer>
          </Card>
        )}
        {confirmationDisplay && (
          <Card>
            <>
              {isSuccess && data ? (
                <h2>{`Pedido realizado - ${data.orderId}`}</h2>
              ) : (
                'Erro no pedido'
              )}
              <ConfirmationP>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </ConfirmationP>
              <ConfirmationP>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </ConfirmationP>
              <ConfirmationP>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </ConfirmationP>
              <ConfirmationP>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </ConfirmationP>
              <Button
                onClick={() => {
                  clearCart()
                  setConfirmationDisplay(false)
                  setCartDisplay(true)
                  closeCart()
                  form.resetForm()
                }}
                title="Clique para concluir o pagamento"
                type="button"
              >
                Concluir
              </Button>
            </>
          </Card>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
