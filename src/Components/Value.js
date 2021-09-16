import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';




class Value extends React.Component {

    inputValue = {
        todo: '',
        descripcion: '',
        trim: ''
    }
    state = this.inputValue


    cancelCourse = () => {
        this.setState({
            todo: "",
            descripcion: "",
            trim: ""
        });
    }

    handleOnSubmit = (e) => {
        fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.inputValue),
        })
            .then(function (response) {
                console.log("response.url", response.url);
                return response.json();
            })
            .then(function (data) {
                console.log("vamos", data)
            })
            .catch(function (err) {
                console.error(err);
            });
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState(this.inputValue);
    }
    render() {

        const { todo } = this.state;
        const { descripcion } = this.state;
        const { trim } = this.state;


        const handleSelect = (e) => {
            const { value, name } = e.target;
            let index = e.target.selectedIndex;
            console.log(e.target.options[index].text); // obtiene el texto de la opción seleccionada
            console.log(e.target.value, e.target.name);
            this.setState({
                [name]: value
            });
        };
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div className="row">
                    <div className="form group col md-4">
                        <TextField
                            id="todo"
                            label="valor"
                            type="number"
                            value={todo}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => this.setState({ todo: e.target.value })}
                            variant="outlined"
                            required

                        />

                    </div>
                    <div className="form group col md-4">
                        <FormControl variant="outlined" >
                            <InputLabel htmlFor="outlined-descripcion-native-simple">descripcion</InputLabel>
                            <Select
                                required
                                native
                                value={descripcion}
                                onChange={handleSelect}
                                name="descripcion"
                                inputProps={{
                                    id: 'descripcion',
                                }}
                            >

                                <option aria-label="None" />
                                <option>Seleccionar...</option>
                                <option value={1}>prueba</option>
                                <option value={2}>Prueba 1</option>
                                <option value={3}>Prueba 2</option>
                                <option value={4}>Prueba 3</option>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="form group col md-4">
                        <TextField
                            id="trim"
                            label="trim"
                            type="number"
                            value={trim}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => this.setState({ trim: e.target.value })}
                            variant="outlined"
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form group col-md-4">
                        <Button type="submit"
                            variant="outlined"
                            color="primary"
                            size="small"
                            onClick={this.handleSubmit}
                        >
                            Guardar
                        </Button>
                    </div>
                    <div className="form group col-md-4">
                        <Button type="reset"
                            variant="outlined"
                            color="secondary"
                            size="small"
                         onClick={this.cancelCourse}
                        >
                            Limpiar
                        </Button>
                    </div>
                </div>
            </form>
        );
    }
}
export default Value