import React, {useEffect, useState} from "react";
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsThunkAction} from "../../../redux/actions/productActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import SimpleProductTable from "../../components/SimpleProductTable";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    base: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: "25px"
    },
    table: {
        paddingLeft: "20px"
    },
    spinner: {
        paddingLeft: "20px",
        paddingTop: "20px"
    }
}));


export function ProductForm(props){
    const [amount, setAmount] = useState();

    const DEFAULT_0 = "0";

    const styles = useStyles();

    const dispatch = useDispatch();

    const fetchProducts = () => dispatch(fetchProductsThunkAction());
    const products = useSelector(state => state.products.data);
    const isLoading = useSelector(state => state.products.loading);
    const hasError = useSelector(state => state.products.error);

    useEffect(() => {
        if (_.isEmpty(products))
        fetchProducts();
    },[products, amount])

    const handleAmountChange = (amount) => {
        setAmount(amount);
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <div className={styles.centered}>
        <div className={styles.base}>
            <div>
                <FormControl fullWidth className={styles.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Please enter amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={amount}
                        onChange={(event) => handleAmountChange(event.target.value)}
                        startAdornment={<InputAdornment position="start">€</InputAdornment>}
                        labelWidth={155}
                        type="number"
                        placeholder={DEFAULT_0}
                    />
                </FormControl>
            </div>
            <div className={styles.table}>
                {isLoading ?
                    <div className={styles.spinner}>
                        <CircularProgress
                            size={20}
                        />
                    </div> : hasError ?
                        <Alert severity="error">Not able to load products table T_T </Alert>
                        : <SimpleProductTable products={products} enteredAmount={amount}/>}
            </div>
        </div>
        </div>
    )
}