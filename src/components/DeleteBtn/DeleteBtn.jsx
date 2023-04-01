import { useDispatch } from 'react-redux';
import {
  deleteTransaction,
  getExpenseSummary,
  getIncomeSummary,
} from 'redux/transactions/trans-operations';
import { deleteByClick } from 'redux/transactions/trans-slice';
import Sure from 'components/Sure/Sure';
import { DelBtn } from './DeleteBtn.styled';
import { useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useScrollBlock from 'hooks/useScrollBlock';

const deleteBtnSx = {
  fill:'#787a82',
  "&:hover": {
    fill: '#ed3140',
    transform:'scale(1.1)'
  },

}

export default function DeleteBtn(id) {
  const [modal, setModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (modal) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
      blockScroll();
    }else{
      allowScroll();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line
  }, [modal]);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleClickOutside = e => {
    if (e.target.tagName !== 'DIV') return;

    if (e.target.className.includes('Modal_overlay')) {
      closeModal();
    }
  };
  const closeModal = () => {
    setModal(false);
  };

  const handleClick = () => {
    setModal(true);
  };

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTransaction(id))
      .unwrap()
      .then(() => {
        dispatch(getExpenseSummary());
        dispatch(getIncomeSummary());
      });
    dispatch(deleteByClick(id));
    closeModal();
  };

  //   const detByClick = id => {
  //  dispatch(deleteTransaction(id))
  //    .unwrap()
  //    .then(() => dispatch(getExpenseSummary()));
  //  dispatch(deleteByClick(id));
  //   };

  return (
    <>
      <DelBtn type="button" onClick={handleClick}>
        <DeleteForeverIcon sx={deleteBtnSx}/>
      </DelBtn>
      {modal && (
        <Sure
          onClick={closeModal}
          handleConfirm={handleDelete}
          handleCancel={() => setModal(prevState => !prevState)}
        />
      )}
    </>
  );
}
