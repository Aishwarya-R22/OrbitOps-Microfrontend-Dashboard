'use client';
import React from 'react';
export class ModuleErrorBoundary extends React.Component<{children:React.ReactNode},{failed:boolean}>{state={failed:false};static getDerivedStateFromError(){return{failed:true}}render(){return this.state.failed?<div className="card error-box"><h2>This module couldn’t load</h2><p>The rest of OrbitOps is still available. Try loading this workspace again.</p><button className="primary-btn" onClick={()=>this.setState({failed:false})}>Try again</button></div>:this.props.children}}
