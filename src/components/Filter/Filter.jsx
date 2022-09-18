import PropTypes from 'prop-types';
import { Label } from "./FilterStyled";

const Filter = ({ value, onChange }) => (
    <Label>
      Find contacts by name
      <input type="text" value={value} name="filter" onChange={onChange} />
    </Label>
  );


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}
  
export default Filter;