"use client";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import Link from "next/link";
import React, { createRef, useRef, useState } from "react";
import "./style.css";

export default function AboutUs() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: {
    target: {
      name: string;
      value: string;
    };
  }) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="info">
        <h1>About Us </h1>
      </div>
      <Box sx={{ position: "relative" }}>
        <Container>
          <Box
            sx={{
              display: {
                sm: "block",
                md: "flex",
              },
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2em",
              marginY: "6em",
            }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="formContact">
              <Typography
                variant="h3"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                Contactanos en un{" "}
                <Link href="/">
                  <strong
                    style={{ color: "var(--primary-color)" }}
                    color="primary"
                  >
                    click
                  </strong>
                </Link>
              </Typography>
              <Typography variant="h4"></Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                label="nombre"
                variant="outlined"
                margin="normal"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                type="email"
                id="outlined-basic"
                label="correo"
                variant="outlined"
                margin="normal"
                name="email"
                value={form.email}
                required
                onChange={handleChange}
              />
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="numero de telefono"
                variant="outlined"
                margin="normal"
                name="phone"
                required
                onChange={handleChange}
              />
              <Button type="submit" className="buttonSubmit" fullWidth>
                enviar
              </Button>
              <Box></Box>
            </form>
            <iframe
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.8063007745881!2d-71.97889343044866!3d-13.521766599177912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd6757384a4f7%3A0xa2afa16155a04202!2sMatara%20377%2C%20Cusco%2008002!5e0!3m2!1ses-419!2spe!4v1685121163525!5m2!1ses-419!2spe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
