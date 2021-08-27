import React from 'react';

// react-icons
import {MdSmartphone} from 'react-icons/md';
import {FiMail} from 'react-icons/fi';

// material-ui
import { makeStyles } from '@material-ui/core';

// styles
import '../index.css';

const useStyles = makeStyles({
    curriculum:{
        width:'100%',
        height:'38rem',
        overflowY:'auto',
        backgroundColor:'white',
        padding:'4rem',
        boxShadow:'0 0 0.5rem rgba(0,0,0,0.2)',
    },
    headerCurriculum:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginBottom:'1.2rem',
    },
    nome:{
        fontSize:'1.2rem',
        fontWeight:'bold',
    },
    endereco:{
        fontSize:'0.7rem',
    },
    itensHeader:{
        color:"#8f8f87",
        fontSize:'0.7rem',
        display:'flex',
        flexWrap:'wrap',
    },
    itemHeader:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:"center",
        padding:'0.2rem 0.5rem 0.2rem 0.5rem',
    },
    titleBlock:{
        width:'100%',
        color:'black',
        borderBottom:'2px solid black',
        fontWeight:'bold',
        fontSize:'0.9rem',
    },
    paragraphsBlock:{
        marginTop:'0.4rem',
        width:'100%',
        fontSize:'0.7rem',
        textAlign:'justify',
    },
    paragraph:{
        marginBottom:'0.2rem',
    },
});

const ItemHeader = (props) => {

    const styles = useStyles();

    return (
        <span className={styles.itemHeader}>
            <span style={{marginRight:'0.2rem'}}>{props.icon}</span>
            <span>{props.txt}</span>
        </span>
    )
};

const BlockInfo = (props) => {

    const styles = useStyles();

    return(
        <div className={styles.blockInfo}>
            <div className={styles.titleBlock}>
                {props.title}
            </div>
            <div className={styles.paragraphsBlock}>
                {props.paragraphs ? 
                    props.paragraphs.map((paragraph, k)=>{
                        return(
                            <p key={k} className={styles.paragraph} id={k === props.paragraphs.length-1 ? "lastParagraph" : null}>
                                {paragraph}
                            </p>
                        )
                    })
                    :
                    <h3>Você não definiu nenhum parágrafo para este bloco.</h3>
                }
            </div>
        </div>
    )
}

const Curriculum = React.forwardRef((props, ref) => {

    const styles = useStyles();

    return (
        <div className={styles.curriculum} ref={ref}>
            {
                props.objPeopleData.nome !== '' ?
                <>
                    <div className={styles.headerCurriculum}>
                        <span className={styles.nome}>{props.objPeopleData.nome}</span>
                        <span className={styles.endereco}>{props.objPeopleData.endereco}</span>
                        <div className={styles.itensHeader}>
                            {props.objPeopleData.telefone ?
                                <ItemHeader icon={<MdSmartphone/>} txt={props.objPeopleData.telefone}/>
                                :
                                ""
                            }
                            {props.objPeopleData.email ?
                                <ItemHeader icon={<FiMail/>} txt={props.objPeopleData.email}/>
                                :
                                ""
                            }
                        </div>
                    </div>
                    <div className={styles.bodyCurriculum}>
                        {
                            props.blocks.length > 0 ? 
                            props.blocks.map((bloco, i)=>{
                                return (
                                    <span key={i}>
                                        <BlockInfo title={bloco.title} paragraphs={bloco.paragraphs}/>
                                    </span>
                                )
                            })
                            :
                            <h4 style={{color:'#c4c4c4', textAlign:'center'}}><em>Adicione blocos de informações para aparecerem aqui...</em></h4>
                        }
                    </div>
                </>
                :
                <h4 style={{color:'#c4c4c4', textAlign:'center'}}><em>Preencha os campos e clique em adicionar para suas informações aparecerem aqui</em></h4>
            }
        </div>
    )
});

export default Curriculum;