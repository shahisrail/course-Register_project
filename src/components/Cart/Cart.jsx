import PropTypes from "prop-types";

const Cart = ({ selectCourse, remaining, totalCredit, totatPrice }) => {
  return (
    <div>
      <h4 className="remaning">Credit Hour Remaining {remaining}</h4>
      <p className="border"></p>
      {selectCourse.map((course,index) => (
        <li className="subj" key={course.id}>
          {`${index + 1}. ${course.subject}`}
        </li>
      ))}
      <p className="border"></p>
      <h4 className="credit">Total Credit Hour : {totalCredit}</h4>
      <p className="border"></p>
      <h4 className="credit">Total Price : {totatPrice}USD</h4>
    </div>
  );
};

Cart.propTypes = {
  selectCourse: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      subject: PropTypes.string.isRequired,
    })
  ).isRequired,
  remaining: PropTypes.number.isRequired,
  totalCredit: PropTypes.number.isRequired,
  totatPrice: PropTypes.number.isRequired,
};

export default Cart;
