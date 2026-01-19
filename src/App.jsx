
import React, { useState } from 'react'


export default function App() {
  const [token,setToken]=useState(localStorage.getItem('token'))
  const [error,setError]=useState('')
  const [form,setForm]=useState({
    campaign:'',text:'',cta:'',
    objective:'Traffic',musicType:'none',musicId:''
  })

  const connect=()=>{localStorage.setItem('token','mock');setToken('mock')}

  const validate=()=>{
    if(form.campaign.length<3) return 'Campaign name must be at least 3 characters.'
    if(!form.text || form.text.length>100) return 'Ad text required (max 100 chars).'
    if(!form.cta) return 'CTA required.'
    if(form.musicType==='none' && form.objective==='Conversions') return 'Music required for Conversions.'
    if(form.musicType!=='none' && form.musicId!=='VALID_MUSIC') return 'Invalid Music ID.'
    return ''
  }

  const submit=()=>{
    if(!token) return setError('Connect TikTok Ads account first.')
    const err=validate()
    if(err) return setError(err)
    alert('Ad submitted successfully (mock)')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">TikTok Ads Creative Flow</h2>

        {!token ? (
          <button onClick={connect} className="w-full bg-black text-white py-2 rounded mb-3">
            Connect TikTok
          </button>
        ) : <p className="text-green-600 mb-3">Connected</p>}

        <input className="input" placeholder="Campaign Name"
          onChange={e=>setForm({...form,campaign:e.target.value})}/>

        <textarea className="input mt-3" placeholder="Ad Text (max 100 chars)"
          onChange={e=>setForm({...form,text:e.target.value})}/>

        <select className="input mt-3" onChange={e=>setForm({...form,cta:e.target.value})}>
          <option value="">Select CTA</option>
          <option>Learn More</option>
          <option>Sign Up</option>
        </select>

        <select className="input mt-3" onChange={e=>setForm({...form,objective:e.target.value})}>
          <option>Traffic</option>
          <option>Conversions</option>
        </select>

        <select className="input mt-3" onChange={e=>setForm({...form,musicType:e.target.value})}>
          <option value="none">No Music</option>
          <option value="existing">Existing Music</option>
          <option value="upload">Upload Music</option>
        </select>

        {form.musicType!=='none' &&
          <input className="input mt-3" placeholder="Music ID (VALID_MUSIC)"
            onChange={e=>setForm({...form,musicId:e.target.value})}/>
        }

        {error && <div className="bg-red-100 text-red-700 p-3 mt-4 rounded">{error}</div>}

        <button onClick={submit} className="w-full bg-accent py-2 rounded mt-5 font-semibold">
          Submit Ad
        </button>
      </div>
    </div>
  )
}
