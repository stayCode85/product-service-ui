import React from "react";
import _ from "lodash";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

export default function SimpleProductTable(props){
    const {products, enteredAmount} = props;

    const styles = useStyles();

    const calculateAmountProduct = (weight, price) => {
        return enteredAmount ? (Math.floor(enteredAmount/price) * weight) : 0;
    }

    const productsPriceSmallerThanEnteredAmount = (products) => {
        return _.filter(products, product => enteredAmount >= product.price);
    }

    return (
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product name</TableCell>
                            <TableCell align="right">Weight&nbsp;(kg)</TableCell>
                            <TableCell align="right">Price&nbsp;(€)</TableCell>
                            <TableCell align="right">amount&nbsp;(kg)/inserted amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products ? productsPriceSmallerThanEnteredAmount(products).map((product) => (
                            <TableRow key={product.name}>
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="right">{product.weight}</TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell
                                    align="right">{calculateAmountProduct(product.weight, product.price)}</TableCell>
                            </TableRow>
                            )) : ""}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}