import * as React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Mask } from "./style";
import { updateRates } from "../../action/updateRates";
import Api from "../../api";

const Index = ({ rates, dispatchUpdateRatesStates }) => {
  const [isDisplay, updateDisplay] = useState(false);

  async function fetchData() {
    const response = await Api.getRateByCurrency("GBP");
    dispatchUpdateRatesStates(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container data-testid="index">
      <Mask isDisplay={isDisplay} />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateRatesStates: (rates) => {
    dispatch(updateRates(rates));
  },
});

const mapStateToProps = (state) => ({
  rates: state.currencyReducer.rates,
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
