import React from 'react';
class Listar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<div
            class="table-responsive"
        >
            <table
                class="table table-primary"
            >
                <thead>
                    <tr>
                        <th scope="col">id1</th>
                        <th scope="col">nombre 2</th>
                        <th scope="col">correo 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td scope="row">R1C1</td>
                        <td>R1C2</td>
                        <td>R1C3</td>
                    </tr>
                    <tr class="">
                        <td scope="row">Item</td>
                        <td>Item</td>
                        <td>Item</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default Listar;