import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Button, Input, TextField, Typography } from '@mui/material';

export default function RegistrarEquipe() {

  const [selectedImage, setSelectedImage] = useState('/Secitex_logo.png');

  const enviarRegistro = () => {//envia os dados do forms para o banco de dados

  }

  return (
    <Box
      sx={{
        width: '99.2vw',
        backgroundColor: '#fff',
        color: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Typography variant="h4" sx={{marginBottom: '10px'}}>
        Inscrição das Equipes Olimpíada de Robótica - SECITEX 2023
      </Typography>
      <Box sx={{marginBottom: '10px'}}>
        <Image src={selectedImage} width={400} height={250}/>
      </Box>
      
      <TextField label="Nome do time" variant="outlined" sx={{marginBottom: '10px'}}/>
      <TextField label="Nome do orientador" variant="outlined"  sx={{marginBottom: '10px'}}/>
      <TextField label="1º Integrante do time" variant="outlined"  sx={{marginBottom: '10px'}}/>
      <TextField label="Mátrícula do 1º integrante" variant="outlined"  sx={{marginBottom: '10px'}}/>
      <TextField label="2º Integrante do time" variant="outlined"  sx={{marginBottom: '10px'}}/>
      <TextField label="Mátrícula do 2º integrante" variant="outlined"  sx={{marginBottom: '10px'}}/>
      <TextField label="3º Integrante do time" variant="outlined"  sx={{marginBottom: '10px'}}/>
      <TextField label="Mátrícula do 3º integrante" variant="outlined"  sx={{marginBottom: '10px'}}/>
      <TextField label="4º Integrante do time" variant="outlined"  sx={{marginBottom: '10px'}}/>
      <TextField label="Mátrícula do 4º integrante" variant="outlined"  sx={{marginBottom: '10px'}}/>
      <Button variant="contained" style={{ backgroundColor: 'gray', color: 'white' }} onClick={enviarRegistro} >
        Registrar inscrição
      </Button>
      
      <Box >
        <Box sx={{height: '14vh',}} ></Box>
        <Typography variant="h7" color={'grey'} >
          Created by Christy 2023
        </Typography>
        <Box sx={{height: '1vh',}} ></Box>
      </Box>

    </Box>
      
  )
}
