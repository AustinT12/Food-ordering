import classes from './Input.module.css';

const Input = props => {
    return  <div className={classes.input}>
        <label htmlFpr={props.input.id}>{props.label}</label>
        <inout {...props.input}/>
    </div>
};

export default Input;