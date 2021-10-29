import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import GlobalStyle from "../../src/styles/global-style";
import { store } from "../../src/store";
import App from "../../src/components/app";
import api from "../../src/api";
import fakeCurrencyRateData from "./fake_currency_rate_data";

// Mock API
jest.mock("../../src/api");
const mockedGetRateByCurrency = api.getRatesByCurrency as jest.Mock;
mockedGetRateByCurrency.mockResolvedValue(fakeCurrencyRateData);

describe("<Index />", () => {
  test("Render without crash", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    );
    expect(getByTestId("index")).toBeInTheDocument();

    // Should get the exchange rate from API
    expect(mockedGetRateByCurrency).toHaveBeenCalledTimes(1);

    // Should change target account input amount when changing current account input
    await fireEvent.change(getByTestId("sell-input"), {
      target: { value: "10" },
    });

    expect((getByTestId("buy-input") as HTMLInputElement).value).toBe("+13.74");
    expect((getByTestId("sell-input") as HTMLInputElement).value).toBe("-10");

    // Should allow user to change account to sell or buy
    await fireEvent.click(getByTestId("changeCurrency"));

    await fireEvent.change(getByTestId("sell-input"), {
      target: { value: "10" },
    });

    expect((getByTestId("buy-input") as HTMLInputElement).value).toBe("-13.74");
    expect((getByTestId("sell-input") as HTMLInputElement).value).toBe("+10");

    // Should show the popup when clicking the submit button
    await fireEvent.click(getByTestId("submit-request"));
    expect(getByTestId("exchange-text").textContent).toBe("£0.11 to €0.09");
  });
});
