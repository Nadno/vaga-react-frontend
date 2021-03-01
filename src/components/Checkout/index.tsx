import React from 'react';
import styled from 'styled-components';
import FormData, { WrappedComponent } from '../../HOC/form';

import Form from '../Form';
import DefaultInput from '../Input';

import { CartProps } from '../Cart';
import { Section, OrderInfo } from './style';

const CheckoutForm = styled(Form)`
  min-height: 100%;
  justify-content: flex-start;
`;

const INITIAL_DATA = {
  cardNumber: '',
  cardOwner: '',
  cardValidate: '',
  cardSecurityCode: '',
};
type CheckoutData = typeof INITIAL_DATA;

interface Props extends Pick<CartProps, 'products'> {
  finalPrice: number;
}

const Checkout: WrappedComponent<CheckoutData, Props> = ({
  data,
  handleChange,
  finalPrice,
  products,
}) => {
  return (
    <Section>
      <CheckoutForm>
        <h2 className="title">Cartão</h2>
        <Form.Fieldset>
          <DefaultInput
            id="card-number"
            name="cardNumber"
            value={data.cardNumber}
            label="Número do cartão"
            placeholder="XXX XXX XXX XXXX"
            handleChange={handleChange}
          />
          <DefaultInput
            id="card-owner"
            name="cardOwner"
            value={data.cardOwner}
            label="Nome"
            placeholder="Nome, presente no cartão"
            handleChange={handleChange}
          />

          <div className="input-block">
            <DefaultInput
              type="month"
              id="card-validate"
              name="cardValidate"
              value={data.cardValidate}
              label="Validade"
              placeholder="MM/AA"
              handleChange={handleChange}
            />
            <DefaultInput
              id="card-security-code"
              name="cardSecurityCode"
              value={data.cardSecurityCode}
              label="Código de segurança"
              placeholder="123"
              handleChange={handleChange}
            />
          </div>
        </Form.Fieldset>
      </CheckoutForm>
    </Section>
  );
};

export default FormData(Checkout, INITIAL_DATA);