import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


function FormatNumber({ number }) {
    return new Intl.NumberFormat("ES-CO").format((number))
}

class List extends React.Component {

    render() {
        const { todo } = this.props;
        console.log("todo",todo);
        return (
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Consecutivo</TableCell>
                            <TableCell align="center">Valor</TableCell>
                            <TableCell align="center">Descripcion</TableCell>
                            <TableCell align="center">TRM</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todo.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{index}</TableCell>
                                <TableCell align="center"><FormatNumber number = {item.todo}/></TableCell>
                                <TableCell align="center">{item.descripcion}</TableCell>
                                <TableCell align="center"><FormatNumber number = {item.trim}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        )
    };
}

export default List;