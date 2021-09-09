import React from "react";
import ReactCountryFlag from "react-country-flag";

export default function CurrencyItem({ currency, onClick, showRate = true }) {
    return (
        <li className="flex justify-between items-center w-60 mb-2 lg:mb-10 shadow-lg drop-shadow-lg px-5 py-3 md:flex-col md:items-center cursor-pointer rounded-md bg-white text-gray-800" onClick={onClick}>
            {/* <img className="w-11 mr-4 rounded-full md:w-32 md:mr-0 md:mb-5" src="/images/USA.png" alt="usa flag"/> */}
            <ReactCountryFlag
                countryCode={currency.country_code}
                svg
                className=" text-3xl md:text-8xl mr-4 rounded-full md:w-32 md:mr-0 md:mb-5"
                title={currency.country_code}
            />
            <span className={`font-semibold md:mb-5 md:text-xl ${showRate ? 'flex-grow' : 'flex-grow-0'}`}>{currency.currency_code}</span>
            {
                showRate && <span className="font-bold lg:text-xl">{ currency.currency_price }</span>
            }
        </li>
    )
}