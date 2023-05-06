import React, {useEffect} from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Link} from "react-router-dom";

export default function Cadastro() {

    useEffect(() => {
        import('./../assets/css/forms.css');
    }, []);

    const schema = yup.object({

        nome: yup.string().required('O nome é obrigatório'),
        email: yup.string().email().required('O email é obrigatório'),
        password: yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres')
            .required('O password é obrigatório'),
        idade: yup.number().integer().required('A idade é obrigatória'),
        tipo_investidor: yup.string().required('O tipo investidor é obrigatório'),
        cep: yup.string().min(8).max(9).required('O cep é obrigatório'),
        logradouro: yup.string().required('O logradouro é obrigatório'),
        numero: yup.number().integer().required('O numero é obrigatório'),
        complemento: yup.string(),
        bairro: yup.string().required('O bairro é obrigatório'),
        uf: yup.string().required('A uf é obrigatória'),
        cidade: yup.string().required('A cidade é obrigatória'),
    });

    const { register, handleSubmit, formState: { errors }, setValue, setFocus } = useForm({ resolver: yupResolver(schema) })

    // const [listaClientes, setListaClientes] = useState()

    function inserirCliente(cliente) {
        // setListaClientes([...listaClientes, cliente])
        console.log(cliente);
    }

    function buscarCep(e) {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                setValue('logradouro', data.logradouro)
                setValue('bairro', data.bairro)
                setValue('cidade', data.localidade)
                setValue('uf', data.uf)
                setFocus('numero')
            })
    }

    return (
        <section className="form-container form-register">
            <form onSubmit={handleSubmit(inserirCliente)}>
                <input type="text" className="form-input" id="nome" name="nome" placeholder="Seu nome" {...register('nome')} />
                {errors.nome ? <span className="error">{errors.nome.message}</span> : null}

                <input type="email" className="form-input" id="email" name="email" placeholder="Seu email" {...register('email')} />
                {errors.email ? <span className="error">{errors.email.message}</span> : null}

                <input type="password" className="form-input" id="senha" name="senha" placeholder="Sua senha" {...register('password')}/>
                {errors.password ? <span className="error">{errors.password.message}</span> : null}

                <div className="form-inline">
                    <input type="number" step="1" className="form-input" id="idade" name="idade" placeholder="Sua idade"
                           {...register('idade')} />
                    <select name="tipo_investidor" id="tipo_investidor" className="form-select minimal" {...register('tipo_investidor')}>
                        <option value="">Perfil de investidor</option>
                        <option value="1">Conservador</option>
                        <option value="2">Moderado</option>
                        <option value="3">Arrojado</option>
                    </select>
                </div>
                {errors.idade ? <span className="error">{errors.idade.message}</span> : null}
                {errors.tipo_investidor ? <span className="error">{errors.tipo_investidor.message}</span> : null}

                <h2>Informe seu endereço</h2>
                <input type="text" className="form-input" id="cep" name="cep" placeholder="CEP" maxLength="9"
                       {...register('cep')} onBlur={buscarCep} />
                {errors.cep ? <span className="error">{errors.cep.message}</span> : null}

                <input type="text" className="form-input" id="logradouro" name="logradouro" placeholder="Logradouro" {...register('logradouro')} />
                {errors.logradouro ? <span className="error">{errors.logradouro.message}</span> : null}

                <div className="form-inline">
                    <input type="number" step="1" className="form-input" id="numero" name="numero" placeholder="Número" {...register('numero')} />
                    <input type="text" step="1" className="form-input" id="complemento" name="complemento" placeholder="Complemento" {...register('complemento')} />
                </div>
                {errors.numero ? <span className="error">{errors.numero.message}</span> : null}
                <input type="text" className="form-input" id="bairro" name="bairro" placeholder="Bairro" {...register('bairro')} />
                {errors.bairro ? <span className="error">{errors.bairro.message}</span> : null}

                <div className="form-inline">
                    <input type="text" className="form-input" id="uf" name="uf" placeholder="UF" maxLength="2" {...register('uf')} />
                    <input type="text" className="form-input" id="cidade" name="cidade" placeholder="Cidade" {...register('cidade')} />
                </div>
                {errors.uf ? <span className="error">{errors.uf.message}</span> : null}
                {errors.cidade ? <span className="error">{errors.cidade.message}</span> : null}

                <input type="submit" className="btn btn-primary" value="Finalizar Cadastro" />

                <div className="form-inline">
                    <button type="submit" className="btn btn-light">Google</button>
                    <button type="submit" className="btn btn-light">Facebook</button>
                </div>
            </form>
            <div className="form-text" id="register">
                Já possui uma conta? <Link to="/login" title="Login">Acesse Aqui</Link>
            </div>
        </section>
    );
}