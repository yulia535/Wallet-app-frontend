import React, { useState, useEffect } from 'react';

// API
import currencyApi from '../../api/pb-api';

import s from './Currency.module.css';

function Currency() {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRates();
    return () => setRates([]); //CDU
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const fetchRates = async () => {
    try {
      setIsLoading(true);

      const data = await currencyApi.fetchRates();
      data.length = 3;
      setRates([...rates, ...data]);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {isLoading && (
        <div className={s.currencyContainer}>
          <table className={s.currencyTable}>
            <thead>
              <tr className={s.currencyRow}>
                <th className={s.currencyColumn}>Валюта</th>
                <th className={s.currencyColumn}>Покупка</th>
                <th className={s.currencyColumn}>Продажа</th>
              </tr>
            </thead>

            <tbody className={s.currencyTbody}>
              {rates.map(({ ccy, buy, sale }) => (
                <tr className={s.currencyTr} key={ccy}>
                  <td className={s.currencyTd}>{ccy}</td>
                  <td className={s.currencyTd}>{Number(buy).toFixed(2)}</td>
                  <td className={s.currencyTd}>{Number(sale).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {error && <p>Что-то пошло не так. Попробуйте позже.</p>}
    </>
  );
}

export default Currency;
