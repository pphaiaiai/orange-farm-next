'use client'

import React, { useState } from 'react'
import { TextField, Typography, Container } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { fetchData } from '@/utils/api'
import { LoginOutlined } from '@mui/icons-material'
import { useRouter, redirect } from 'next/navigation'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [buttonLoading, setButtonLoading] = useState<boolean>(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setButtonLoading(true)
    e.preventDefault()
    setError(null)

    try {
      const response = await fetchData('/login', {
        method: 'POST',
        data: { email, password },
      })

      if (response) {
        console.log("Login successful:", response)
        router.push('/orange')
      } else {
        setError(
          "Login failed. Please check your email or password and try again."
        )
      }
    } catch (err) {
      console.error('Login error:', err)
      setButtonLoading(false)
      setError(
        'Login failed. Please check your email or password and try again.'
      )
    }
  }

  return (
    <Container maxWidth="xs" className="mt-10">
      {/* <Typography variant="h5" className="text-center">
        Login
      </Typography> */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          color="warning"
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          color="warning"
        />
        {error && <Typography color="error">{error}</Typography>}
        <LoadingButton
          type="submit"
          variant="contained"
          startIcon={<LoginOutlined />}
          style={{
            backgroundColor: '#FFA500',
            color: 'black',
            fontWeight: 'bold',
            padding: '15px',
          }}
          className="mt-4"
          fullWidth
          loading={buttonLoading}
          loadingPosition="start"
        >
          Login
        </LoadingButton>
      </form>
    </Container>
  )
}

export default Login
