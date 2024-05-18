import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Incomes() {
  const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()
  
  useEffect(() => {
    getIncomes()
}, [])

  return (
    <IncomesStyled>
        <InnnerLayout>
            <h1>Incomes</h1>
            <h2 className="total-income">Total Income: <span>₹ {totalIncome()}</span></h2>
            <div className="income-content">
                <div className="form-container">
                  <Form />
                </div>
                <div className="incomes">
                    {incomes.map((income) => {
                        const {_id, title, amount, date, category, description} = income;
                        return <IncomeItem
                          key={_id}
                          id={_id}
                          title={title} 
                          description={description}
                          amount={amount}
                          date={date}
                          category={category}
                          indicatorColor= "var(--color-green)"
                          deleteItem={deleteIncome}
                        />
                    })}
                </div>
            </div>
        </InnnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`
  display: flex;
  overflow: auto;
  .income-content{
    display: flex;
    gap: 2rem;
    .incomes{
      flex: 1;
    }
  }
  background: #262626;
  .total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3D3D3C;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
      font-size: 2.5rem;
      font-weight: 800;
      color: green;
    }
  }
`;

export default Incomes
