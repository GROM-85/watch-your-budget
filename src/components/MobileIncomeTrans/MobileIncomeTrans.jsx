import DeleteBtn from 'components/DeleteBtn/DeleteBtn';
import { useAuth } from 'hooks';
import { CriptoPortfolio } from 'images/images';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpenseSummary,
  getIncomeSummary,
} from 'redux/transactions/trans-operations';
import { getIncomesTrans } from 'redux/transactions/trans-selectors';
import {
  Amount,
  Category,
  Date,
  Descr,
  Item,
  Line,
  List,
  Wrapper,
} from './MobileIncomeTrans.styled';

export default function MobileIncomeTrans() {
  const allIncomeTrans = useSelector(getIncomesTrans);

  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRefreshing) {
      return;
    }
    dispatch(getIncomeSummary());
    dispatch(getExpenseSummary());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefreshing]);

  if (allIncomeTrans === null) {
    return;
  }

  return (
    <>{allIncomeTrans.length < 1 ? <CriptoPortfolio style={{marginTop:'200px'}}/> :
    <List>
      {allIncomeTrans.map(({ _id, amount, category, description, date }) => {
        const formattedAmount = amount.toLocaleString('ru-RU', {
          style: 'decimal',
          minimumFractionDigits: 2,
        });

        return (
          <div key={_id}>
            <Item>
              <Wrapper>
                <Category>{category}</Category>
                <div>
                  <Date>{date}</Date>
                  <Descr>{description}</Descr>
                </div>
              </Wrapper>
              <Amount>{`${formattedAmount} UAH.`}</Amount>
              <DeleteBtn id={_id} />
            </Item>
            <Line />
          </div>
        );
      })}
    </List>}
    </>
  );
}
