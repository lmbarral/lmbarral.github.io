import React, { useRef } from "react";
import { useState, useEffect } from "react";
import './Calculator.css';

const Calculator = ({submitSearch, passState, pError, handleClick1}) => {

    const [category, setCategory] = useState("");
    const [month, setMonth] = useState("");
    const [ant, setAnt] = useState("");
    const [jornada, setJornada] = useState("");
    const os = 0.03;
    const [feriados, setFeriado] = useState("");
    const [vacaciones, setVacaciones] = useState("");
    const [extras50, setExtras50] = useState("");
    const [extras100, setExtras100] = useState("");
    const [adEmpresa, setAdEmpresa] = useState("");
    const [base, setBase] = useState("");
    const [data, setData] = useState({});
    const [state, setState] = useState(false);
    const [error, setError] = useState(true);

    console.log(data)

    const [g, setG] = useState(true);
    const [c, setC] = useState(false);
    const [t, setT] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if(!data || data === undefined) return;
        if(!category || !month || !ant || !jornada || category === "" || month === "" || ant === "" || jornada === "") {
            pError(error);
            return;
        }
        setError(false);
        pError(error);
        setData({category, month, ant, jornada, os, extras50, extras100, base, feriados, vacaciones, adEmpresa});
        //console.log(data);
        submitSearch(data);
        if(state === true) return;
        setState(current => !current);
        passState(state);
    }

    const handleChange = () => {
        setData({category, month, ant, jornada, os, extras50, extras100, base, feriados, vacaciones, adEmpresa});
    }

    const handleErrase = () => {
        setExtras50("");
        setExtras100("");
        setBase("");
        setFeriado("");
        setVacaciones("");
        setAdEmpresa("");
        if(category === "" || month === "" || ant === "" || jornada === "") return;
        setCategory("");
        setMonth("");
        setAnt("");
        setJornada("");
        if(data === "" || data === {} || data === undefined) return;
        setData("");
        setState(current => !current);
        passState(state);
        setError(false);
        pError(error);
        setError(current => !current);
    }

    const handleClosure = () => {
        handleClick1(false);
        handleErrase();
        pError(false);
    }

    const GENERAL = () => {
        
        return(
            <select
            class="form-select text-center"
            type="text"
            name="Category"
            required
            autoFocus
            value={category}
            onChange={(e) => { setCategory(e.target.value); handleChange() }}>
                <option defaultValue={""}>Elegí una opción</option>
                <option value="11" >Maestranza A</option>
                <option value="12" >Maestranza B</option>
                <option value="13" >Maestranza C</option>
                <option value="21" >Administrativo A</option>
                <option value="22" >Administrativo B</option>
                <option value="23" >Administrativo C</option>
                <option value="24" >Administrativo D</option>
                <option value="25" >Administrativo E</option>
                <option value="26" >Administrativo F</option>
                <option value="31" >Cajeros A</option>
                <option value="32" >Cajeros B</option>
                <option value="33" >Cajeros C</option>
                <option value="41" >Auxiliar A</option>
                <option value="42" >Auxiliar B</option>
                <option value="43" >Auxiliar C</option>
                <option value="51" >Auxiliar Especializado A</option>
                <option value="52" >Auxiliar Especializado B</option>
                <option value="61" >Vendedor A</option>
                <option value="62" >Vendedor B</option>
                <option value="63" >Vendedor C</option>
                <option value="64" >Vendedor D</option>
            </select>
        );
    }

    const CALLCENTER = () => {

        return(
            <select
            class="form-select text-center"
            type="text"
            name="Category"
            required
            autoFocus
            value={category}
            onChange={(e) => { setCategory(e.target.value); handleChange() }}>
                <option defaultValue={""}>Elegí una opción</option>
                <option value="71" >Mantenimiento</option>
                <option value="81" >Administrativo</option>
                <option value="91" >Operación A</option>
                <option value="92" >Operación B</option>
            </select>
        );
    }

    return(
        <section id="calculator">
            <div className="Calculator">
                <div className="Pre-Calculator-title">
                    <h2>CALCULADORA DE SUELDO SEC</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h4>Categoría</h4>
                                <select
                                class="form-select text-center"
                                type="text"
                                name="Category"
                                required
                                autoFocus
                                value={category}
                                onChange={(e) => { setCategory(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option className="disOpt" disabled><strong>CONVENIO GENERAL</strong></option>
                                    <option value="11" >Maestranza A</option>
                                    <option value="12" >Maestranza B</option>
                                    <option value="13" >Maestranza C</option>
                                    <option value="21" >Administrativo A</option>
                                    <option value="22" >Administrativo B</option>
                                    <option value="23" >Administrativo C</option>
                                    <option value="24" >Administrativo D</option>
                                    <option value="25" >Administrativo E</option>
                                    <option value="26" >Administrativo F</option>
                                    <option value="31" >Cajeros A</option>
                                    <option value="32" >Cajeros B</option>
                                    <option value="33" >Cajeros C</option>
                                    <option value="41" >Auxiliar A</option>
                                    <option value="42" >Auxiliar B</option>
                                    <option value="43" >Auxiliar C</option>
                                    <option value="51" >Auxiliar Especializado A</option>
                                    <option value="52" >Auxiliar Especializado B</option>
                                    <option value="61" >Vendedor A</option>
                                    <option value="62" >Vendedor B</option>
                                    <option value="63" >Vendedor C</option>
                                    <option value="64" >Vendedor D</option>
                                    <option className="disOpt" disabled><strong>CONVENIO CALL CENTER</strong></option>
                                    <option value="71" >Mantenimiento</option>
                                    <option value="81" >Administrativo</option>
                                    <option value="91" >Operación A</option>
                                    <option value="92" >Operación B</option>
                                </select>
                            </div>
                            <div class="col">
                                <h4>Mes de Cálculo</h4>
                                <select
                                class="form-select text-center"
                                type="text"
                                name="month"
                                //required
                                autoFocus
                                value={month}
                                onChange={(e) => { setMonth(e.target.value); handleChange() }}>
                                    <option defaultValue={"0"}>Elegí una opción</option>
                                    <option value="202304" >Abr.2023</option>
                                    <option value="202303" >Mar.2023</option>
                                    <option value="202302" >Feb.2023</option>
                                    <option value="202301" >Ene.2023</option>
                                    <option value="202212" >Dic.2022</option>
                                    <option value="202211">Nov.2022</option>
                                    <option value="202210" >Oct.2022</option>
                                    <option value="202209" >Sep.2022</option>
                                    <option value="202208" >Ago.2022</option>
                                    <option value="202207" >Jul.2022</option>
                                    <option value="202206" >Jun.2022</option>
                                    <option value="202205" >May.2022</option>
                                    <option value="202204" >Abr.2022</option>
                                </select>
                            </div>
                            <div class="col">
                                <h4>Años de Antigüedad</h4>
                                <select
                                class="form-select text-center"
                                type="number"
                                name="ant"
                                required
                                //autoFocus
                                value={ant}
                                onChange={(e) => { setAnt(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option value="0.00">0</option>
                                    <option value="0.01">1</option>
                                    <option value="0.02">2</option>
                                    <option value="0.03">3</option>
                                    <option value="0.04">4</option>
                                    <option value="0.05">5</option>
                                    <option value="0.06">6</option>
                                    <option value="0.07">7</option>
                                    <option value="0.08">8</option>
                                    <option value="0.09">9</option>
                                    <option value="0.10">10</option>
                                    <option value="0.11">11</option>
                                    <option value="0.12">12</option>
                                    <option value="0.13">13</option>
                                    <option value="0.14">14</option>
                                    <option value="0.15">15</option>
                                    <option value="0.16">16</option>
                                    <option value="0.17">17</option>
                                    <option value="0.18">18</option>
                                    <option value="0.19">19</option>
                                    <option value="0.20">20</option>
                                    <option value="0.21">21</option>
                                    <option value="0.22">22</option>
                                    <option value="0.23">23</option>
                                    <option value="0.24">24</option>
                                    <option value="0.25">25</option>
                                    <option value="0.26">26</option>
                                    <option value="0.27">27</option>
                                    <option value="0.28">28</option>
                                    <option value="0.29">29</option>
                                    <option value="0.30">30</option>
                                    <option value="0.31">31</option>
                                    <option value="0.32">32</option>
                                    <option value="0.33">33</option>
                                    <option value="0.34">34</option>
                                    <option value="0.35">35</option>
                                    <option value="0.36">36</option>
                                    <option value="0.37">37</option>
                                    <option value="0.38">38</option>
                                    <option value="0.39">39</option>
                                    <option value="0.40">40</option>
                                    <option value="0.41">41</option>
                                    <option value="0.42">42</option>
                                    <option value="0.43">43</option>
                                    <option value="0.44">44</option>
                                    <option value="0.45">45</option>
                                    <option value="0.46">46</option>
                                    <option value="0.47">47</option>
                                    <option value="0.48">48</option>
                                    <option value="0.49">49</option>
                                    <option value="0.50">50</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h4>Jornada</h4>
                                <select
                                class="form-select text-center"
                                type="number"
                                name="jornada"
                                required
                                //autoFocus
                                value={jornada}
                                onChange={(e) => { setJornada(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option value="48">Completa (48 hs)</option>
                                    <option value="47">47 hs</option>
                                    <option value="46">46 hs</option>
                                    <option value="45">45 hs</option>
                                    <option value="44">44 hs</option>
                                    <option value="43">43 hs</option>
                                    <option value="42">42 hs</option>
                                    <option value="40">40 hs</option>
                                    <option value="39">39 hs</option>
                                    <option value="38">38 hs</option>
                                    <option value="37">37 hs</option>
                                    <option value="36">36 hs</option>
                                    <option value="35">35 hs</option>
                                    <option value="34">34 hs</option>
                                    <option value="33">33 hs</option>
                                    <option value="32">32 hs (dos tercios)</option>
                                    <option value="31">31 hs</option>
                                    <option value="30">30 hs</option>
                                    <option value="29">29 hs</option>
                                    <option value="28">28 hs</option>
                                    <option value="27">27 hs</option>
                                    <option value="26">26 hs</option>
                                    <option value="25">25 hs</option>
                                    <option value="24">24 hs (media)</option>
                                    <option value="23">23 hs</option>
                                    <option value="22">22 hs</option>
                                    <option value="21">21 hs</option>
                                    <option value="20">20 hs</option>
                                    <option value="19">19 hs</option>
                                    <option value="18">18 hs</option>
                                    <option value="17">17 hs</option>
                                    <option value="16">16 hs</option>
                                    <option value="15">15 hs</option>
                                    <option value="14">14 hs</option>
                                    <option value="13">13 hs</option>
                                    <option value="12">12 hs</option>
                                    <option value="11">11 hs</option>
                                    <option value="10">10 hs</option>
                                </select>
                            </div>
                            <div class="col">
                                <h4>Feriados Trabajados</h4>
                                <select
                                class="form-select text-center"
                                type="number"
                                name="feriados"
                                required
                                //autoFocus
                                value={feriados}
                                onChange={(e) => { setFeriado(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option value={1} >1</option>
                                    <option value={2} >2</option>
                                    <option value={3} >3</option>
                                    <option value={4} >4</option>
                                    <option value={5}>5</option>
                                    <option value={6} >6</option>
                                    <option value={7} >7</option>
                                    <option value={8} >8</option>
                                    <option value={9} >9</option>
                                    <option value={10}>10</option>
                                </select>
                            </div>
                            <div class="col">
                                <h4>Días de Vacaciones</h4>
                                <select
                                class="form-select text-center"
                                type="number"
                                name="vacaciones"
                                required
                                //autoFocus
                                value={vacaciones}
                                onChange={(e) => { setVacaciones(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option value={1} >1</option>
                                    <option value={2} >2</option>
                                    <option value={3} >3</option>
                                    <option value={4} >4</option>
                                    <option value={5} >5</option>
                                    <option value={6} >6</option>
                                    <option value={7} >7</option>
                                    <option value={8} >8</option>
                                    <option value={9} >9</option>
                                    <option value={10} >10</option>
                                    <option value={11} >11</option>
                                    <option value={12} >12</option>
                                    <option value={13} >13</option>
                                    <option value={14} >14</option>
                                    <option value={15} >15</option>
                                    <option value={16} >16</option>
                                    <option value={17} >17</option>
                                    <option value={18} >18</option>
                                    <option value={19} >19</option>
                                    <option value={20} >20</option>
                                    <option value={21} >21</option>
                                    <option value={22} >22</option>
                                    <option value={23} >23</option>
                                    <option value={24} >24</option>
                                    <option value={25} >25</option>
                                    <option value={26} >26</option>
                                    <option value={27} >27</option>
                                    <option value={28} >28</option>
                                    <option value={29} >29</option>
                                    <option value={30} >30</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h4>Horas Extras al 50%</h4>
                                <input
                                type="number"
                                class="form-control text-center"
                                id="extras50"
                                placeholder="Cant. de Horas Extras"
                                value={extras50}
                                onChange={(e) => { setExtras50(e.target.value); handleChange() }}></input>
                            </div>
                            <div class="col">
                                <h4>Horas Extras al 100%</h4>
                                <input type="number"
                                class="form-control text-center"
                                id="extras100"
                                placeholder="Cant. de Horas Extras"
                                value={extras100}
                                onChange={(e) => { setExtras100(e.target.value); handleChange() } }></input>
                            </div>
                            <div class="col">
                                <h4>Adicional Empresa</h4>
                                <input type="number"
                                class="form-control text-center"
                                id="adEmpresa"
                                placeholder="(Opcional)"
                                value={adEmpresa}
                                onChange={(e) => { setAdEmpresa(e.target.value); handleChange() } }></input>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h4>Sueldo Base</h4>
                                <input
                                type="number"
                                class="form-control text-center"
                                id="base"
                                placeholder="Ingresá tu sueldo base (Opcional)"
                                onChange={(e) => { setBase(e.target.value); handleChange() }}></input>
                            </div>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="submit" onClick={handleChange}>Simular</button>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-danger" type="reset" onClick={handleErrase}>Borrar Calculadora</button>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="reset" onClick={handleClosure}>Cerrar Calculadora</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Calculator;