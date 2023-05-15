import React, {useEffect} from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Link} from "react-router-dom";
import axios from "axios";

export default function Cadastro() {

    const [perfisUsuario, setPerfisUsuario] = useState([]);
    const [modalOpened, setModalOpened] = useState(false);

    useEffect(() => {
        fetch('/perfil_investidor')
            .then(resp => resp.json())
            .then(resp => setPerfisUsuario(resp));

        import('./../assets/css/forms.css');
        import('./../assets/css/_modal.css');
    }, []);

    const schema = yup.object({

        nome: yup.string().required('O nome é obrigatório'),
        email: yup.string().email().required('O email é obrigatório'),
        senha: yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres')
            .required('O password é obrigatório'),
        idade: yup.number().integer("A idade deve ser um número").required('A idade é obrigatória'),
        instituicao_ensino: yup.string(),
        tipo_investidor: yup.string().required('O tipo investidor é obrigatório'),
        cep: yup.string().min(8, "O cep deve ter no mínimo 8 caracteres").max(9, "O cep deve ter no máximo 9 caracteres")
            .required('O cep é obrigatório'),
        logradouro: yup.string().required('O logradouro é obrigatório'),
        numero: yup.number().integer().required('O numero é obrigatório'),
        complemento: yup.string(),
        bairro: yup.string().required('O bairro é obrigatório'),
        uf: yup.string().required('A uf é obrigatória'),
        cidade: yup.string().required('A cidade é obrigatória'),
    });

    const { register, handleSubmit, formState: { errors }, setValue, setFocus } = useForm({ resolver: yupResolver(schema) })

    function cadastrarUsuario(usuario) {
        axios.post('usuarios', {
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            idade: usuario.idade,
            instituicao_ensino: usuario.instituicao_ensino,
            codigo_perfil: usuario.tipo_investidor,
        })
            .then(resp => {
                console.log(resp);
                cadastrarEndereco(usuario);
            })
            .then(resp => {
                setModalOpened(true);
            });
    }

    function cadastrarEndereco(endereco){
        axios.post('usuarios_endereco/ultimo_usuario', {
            cep: endereco.cep,
            logradouro: endereco.logradouro,
            numero: endereco.numero,
            complemento: endereco.complemento,
            bairro: endereco.bairro,
            uf: endereco.uf,
            cidade: endereco.cidade,
        })
            .then(resp => console.log(resp));
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
            <form onSubmit={handleSubmit(cadastrarUsuario)}>
                <input type="text" className="form-input" id="nome" name="nome" placeholder="Seu nome" {...register('nome')} />
                {errors.nome ? <span className="error">{errors.nome.message}</span> : null}

                <input type="email" className="form-input" id="email" name="email" placeholder="Seu email" {...register('email')} />
                {errors.email ? <span className="error">{errors.email.message}</span> : null}

                <input type="password" className="form-input" id="senha" name="senha" placeholder="Sua senha" {...register('senha')}/>
                {errors.senha ? <span className="error">{errors.senha.message}</span> : null}

                <div className="form-inline">
                    <input type="number" step="1" className="form-input" id="idade" name="idade" placeholder="Sua idade"
                           {...register('idade')} />
                    <select name="tipo_investidor" id="tipo_investidor" className="form-select minimal" {...register('tipo_investidor')}>
                        <option value="">Perfil de investidor</option>
                        {
                            perfisUsuario.map(perfil =>
                                <option key={perfil.codigo_perfil} value={perfil.codigo_perfil}>{perfil.tipo}</option>
                            )
                        }   
                    </select>
                </div>
                {errors.idade ? <span className="error">{errors.idade.message}</span> : null}
                {errors.tipo_investidor ? <span className="error">{errors.tipo_investidor.message}</span> : null}

                <input type="text" className="form-input" id="instituicao_ensino" name="instituicao_ensino" placeholder="Sua Instituição de Ensino" {...register('instituicao_ensino')}/>
                {errors.instituicao_ensino ? <span className="error">{errors.instituicao_ensino.message}</span> : null}

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

            </form>

            <div className="form-text" id="register">
                Já possui uma conta? <Link to="/login" title="Login">Acesse Aqui</Link>
            </div>

            <div
                id="modal-cadastro"
                className="modal"
                style={modalOpened ? { display: 'block' } : { display: 'none' }}
            >
                <div className="modal-content">
                    <span className="close" onClick={() => setModalOpened(false)}>&times;</span>
                    <p>Usuário cadastrado com suceeso</p>
                    <Link to="/" className="btn btn-primary" title="Voltar">Voltar</Link>
                </div>
            </div>

        </section>
    );
}