"use client";
import {
  Paper,
  Grid,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export const Comments = () => {
  const formRef = useRef<HTMLDivElement>();
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([
    {
      name: "Juan Perez",
      message:
        "Hola me gusto el evento que realizaron en cordoba, todo de lo mejor 5 estrellas",
      email: "XXXXXXXXX@XXX.com",
    },
    {
      name: "Juan Perez",
      message:
        "Hola, como estan? me gustaria saber el precio del evento en maracaivo",
      email: "XXXXXXXXX@XXX.com",
    },
    {
      name: "Luiza perez",
      message:
        "La paciencia es una virtud? pero podrian responder los mensajes",
      email: "XXXXXXXXX@XXX.com",
    },
    {
      name: "Pedro Infantes",
      message: "Eventos de lujo recomendable",
      email: "XXXXXXXXX@XXX.com",
    },
  ]);
  const [form, setForm] = useState({
    email: "",
    message: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setComments((comments) => [...comments, form]);

    //!TODO send to backend
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight={"600"}>
        Opiniones
      </Typography>

      {comments.map((comment) => (
        <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={imgLink} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>{comment.name}</h4>
              <p className={"commentText"}>{comment.message}</p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
        </Paper>
      ))}

      <form
        onSubmit={handleSubmit}
        ref={formRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2em",
        }}
      >
        <TextField
          focused
          id="outlined-textarea"
          label="nombre"
          placeholder="ingrese su nombre aqui"
          multiline
          required
          onChange={handleChange}
          name="name"
          value={form.name}
          sx={{
            width: {
              xs: "250px",
              sm: "500px",
            },
            background: "white",
          }}
        />
        <TextField
          focused
          id="outlined-textarea"
          label="message"
          placeholder="ingrese su comentario aqui"
          multiline
          onChange={handleChange}
          name="message"
          value={form.message}
          required
          sx={{
            marginTop: "1em",
            width: {
              xs: "250px",
              sm: "500px",
            },
            background: "white",
          }}
        />
        <TextField
          focused
          id="filled-basic"
          placeholder="ingrese su correo aqui"
          onChange={handleChange}
          type="email"
          label="correo"
          value={form.email}
          required
          name="email"
          sx={{
            marginTop: "1em",
            width: {
              xs: "250px",
              sm: "500px",
            },
            background: "white",
          }}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginY: "1em",
            width: {
              xs: "250px",
              sm: "500px",
            },
            height: "100%",
          }}
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};
