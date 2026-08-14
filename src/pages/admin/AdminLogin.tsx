import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

// Floating Particles Component for ambient background
const AmbientParticles = () => {
  const particles = [
    { id: 1, size: 6, left: '15%', top: '25%', duration: 6, delay: 0 },
    { id: 2, size: 4, left: '75%', top: '15%', duration: 8, delay: 1 },
    { id: 3, size: 5, left: '85%', top: '65%', duration: 7, delay: 0.5 },
    { id: 4, size: 8, left: '20%', top: '75%', duration: 9, delay: 2 },
    { id: 5, size: 4, left: '50%', top: '80%', duration: 6.5, delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
          }}
          className="absolute rounded-full bg-gradient-to-tr from-blue-400 via-pink-400 to-amber-300 blur-[1px]"
        />
      ))}
    </div>
  );
};

// Cute 3D Animated Teddy Bear Mascot & Glass Welcome Card
const TeddyMascotSection = () => {
  // Speech bubble text rotation
  const [speechIndex, setSpeechIndex] = useState(0);
  const speechMessages = ['👋 Hi!', 'Hello!'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeechIndex((prev) => (prev + 1) % speechMessages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-6">
      
      {/* 1. Floating Glass Speech Bubble */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-20"
      >
        <div className="px-5 py-2.5 rounded-2xl bg-white/[0.08] backdrop-blur-[24px] border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={speechIndex}
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-bold text-white tracking-wide"
            >
              {speechMessages[speechIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Speech Bubble Arrow Tail */}
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white/20 mx-auto -mt-[1px]" />
      </motion.div>

      {/* 2. Floating Animated 3D Teddy Bear Mascot */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex flex-col items-center"
      >
        <svg
          width="200"
          height="210"
          viewBox="0 0 200 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
        >
          <defs>
            {/* Teddy Body Shading Gradients */}
            <linearGradient id="furGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A06C3F" />
              <stop offset="50%" stopColor="#8B5E3C" />
              <stop offset="100%" stopColor="#6E4527" />
            </linearGradient>

            <linearGradient id="bellyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5E4CE" />
              <stop offset="100%" stopColor="#E2C7A8" />
            </linearGradient>

            <linearGradient id="earInnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ECA7B8" />
              <stop offset="100%" stopColor="#D98297" />
            </linearGradient>

            <radialGradient id="snoutGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FAF0E6" />
              <stop offset="100%" stopColor="#E5CEB3" />
            </radialGradient>

            <linearGradient id="pawPadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E4BE9E" />
              <stop offset="100%" stopColor="#C99E7B" />
            </linearGradient>
          </defs>

          {/* BEARS EARS */}
          {/* Left Ear */}
          <circle cx="58" cy="48" r="22" fill="url(#furGradient)" />
          <circle cx="58" cy="48" r="13" fill="url(#earInnerGradient)" />

          {/* Right Ear */}
          <circle cx="142" cy="48" r="22" fill="url(#furGradient)" />
          <circle cx="142" cy="48" r="13" fill="url(#earInnerGradient)" />

          {/* BEARS FEET / LEGS (Sitting) */}
          {/* Left Foot */}
          <g>
            <ellipse cx="50" cy="178" rx="24" ry="18" fill="url(#furGradient)" />
            <ellipse cx="50" cy="178" rx="15" ry="11" fill="url(#pawPadGradient)" />
            {/* Toe dots */}
            <circle cx="42" cy="168" r="3" fill="#A06C3F" />
            <circle cx="50" cy="166" r="3" fill="#A06C3F" />
            <circle cx="58" cy="168" r="3" fill="#A06C3F" />
          </g>

          {/* Right Foot */}
          <g>
            <ellipse cx="150" cy="178" rx="24" ry="18" fill="url(#furGradient)" />
            <ellipse cx="150" cy="178" rx="15" ry="11" fill="url(#pawPadGradient)" />
            {/* Toe dots */}
            <circle cx="142" cy="168" r="3" fill="#A06C3F" />
            <circle cx="150" cy="166" r="3" fill="#A06C3F" />
            <circle cx="158" cy="168" r="3" fill="#A06C3F" />
          </g>

          {/* BEARS TORSO / BODY */}
          <motion.g
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '100px 140px' }}
          >
            {/* Body base */}
            <path
              d="M60 120 C 50 170, 150 170, 140 120 C 130 95, 70 95, 60 120 Z"
              fill="url(#furGradient)"
            />
            {/* Soft Cream Tummy Patch */}
            <ellipse cx="100" cy="138" rx="28" ry="24" fill="url(#bellyGradient)" />
          </motion.g>

          {/* BEARS LEFT ARM (Resting on tummy) */}
          <g>
            <path
              d="M 55 110 C 35 125, 45 155, 68 148 C 75 142, 70 125, 55 110 Z"
              fill="url(#furGradient)"
            />
            <ellipse cx="62" cy="144" rx="7" ry="6" fill="url(#pawPadGradient)" />
          </g>

          {/* BEARS RIGHT ARM (Waving Hello Continuously) */}
          <motion.g
            animate={{ rotate: [0, -20, 8, -20, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '142px 110px' }}
          >
            <path
              d="M 142 110 C 165 95, 185 70, 172 55 C 158 45, 145 75, 142 110 Z"
              fill="url(#furGradient)"
            />
            {/* Paw pad on waving hand */}
            <ellipse cx="170" cy="58" rx="7" ry="6" fill="url(#pawPadGradient)" />
          </motion.g>

          {/* BEARS HEAD (Tilts softly) */}
          <motion.g
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '100px 75px' }}
          >
            {/* Head circle */}
            <circle cx="100" cy="75" r="44" fill="url(#furGradient)" />

            {/* Cream Snout */}
            <ellipse cx="100" cy="85" rx="20" ry="15" fill="url(#snoutGradient)" />

            {/* Dark Chocolate Nose */}
            <path
              d="M 94 77 C 94 73, 106 73, 106 77 C 106 83, 94 83, 94 77 Z"
              fill="#3A1F0D"
            />
            {/* Nose shine */}
            <ellipse cx="98" cy="76" rx="2" ry="1" fill="#FFFFFF" opacity="0.6" />

            {/* Mouth */}
            <path
              d="M 95 85 Q 100 89 105 85"
              stroke="#3A1F0D"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* EYES with Natural Blinking Animation */}
            {/* Left Eye */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 2.5 }}
              style={{ transformOrigin: '78px 68px' }}
            >
              <circle cx="78" cy="68" r="6" fill="#241408" />
              {/* Eye Catchlight */}
              <circle cx="76" cy="66" r="2" fill="#FFFFFF" />
            </motion.g>

            {/* Right Eye */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 2.5 }}
              style={{ transformOrigin: '122px 68px' }}
            >
              <circle cx="122" cy="68" r="6" fill="#241408" />
              {/* Eye Catchlight */}
              <circle cx="120" cy="66" r="2" fill="#FFFFFF" />
            </motion.g>

            {/* Soft Pink Blush Cheeks */}
            <circle cx="70" cy="80" r="7" fill="#EC4899" opacity="0.25" />
            <circle cx="130" cy="80" r="7" fill="#EC4899" opacity="0.25" />
          </motion.g>
        </svg>

        {/* 3. Soft Glowing 3D Glass Platform */}
        <div className="relative mt-[-20px] flex items-center justify-center">
          {/* Ambient Glow Aura */}
          <div className="absolute w-64 h-16 bg-gradient-to-r from-blue-500/30 via-pink-500/25 to-amber-400/25 rounded-full blur-xl animate-pulse" />
          
          {/* 3D Glass Disc Platform */}
          <div className="w-56 h-12 rounded-[100%] bg-gradient-to-b from-white/20 via-white/10 to-white/5 border border-white/25 backdrop-blur-md shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
        </div>

      </motion.div>

      {/* 4. Glass Welcome Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full p-6 rounded-[24px] bg-white/[0.06] backdrop-blur-[24px] border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-center space-y-2 relative overflow-hidden"
      >
        {/* Subtle glass reflection highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent inline-flex flex-col align-middle">
            <span className="font-serif font-semibold">ArthaNova</span>
            <span className="font-serif font-medium text-[0.60em] tracking-widest text-[#D4AF37] uppercase -mt-0.5">Accounts</span>
          </span>{' '}
          Admin Portal
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed font-medium">
          Manage your clients securely and efficiently.
        </p>
      </motion.div>

    </div>
  );
};

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated, error: authError, clearError } = useAuth();

  // Requirement 2: Empty email by default (no demo prefill)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [localError, setLocalError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mouse position for interactive background lighting
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // If already authenticated, redirect immediately
  const from = (location.state as { from?: { pathname?: string } })?.from?.pathname || '/admin/dashboard';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    clearError();

    if (!email.trim() || !password.trim()) {
      setLocalError('Please enter both email and password.');
      return;
    }

    setIsSubmitting(true);
    try {
      await login(email.trim(), password.trim());
      navigate(from, { replace: true });
    } catch (err: any) {
      setLocalError(err.message || 'Login failed. Invalid credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorMessage = localError || authError;

  return (
    <div className="min-h-screen flex w-full bg-[#081A36] text-white relative overflow-hidden font-sans">
      {/* Requirement 8: Background Ambient Gradient Blobs & Floating Particles */}
      <motion.div
        animate={{
          x: mousePos.x * -40,
          y: mousePos.y * -40,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 200 }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: mousePos.x * 50,
          y: mousePos.y * 50,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 200 }}
        className="absolute bottom-[-10%] right-[30%] w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: mousePos.x * 30,
          y: mousePos.y * 30,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 200 }}
        className="absolute top-[30%] right-[5%] w-[450px] h-[450px] bg-pink-500/15 rounded-full blur-[130px] pointer-events-none"
      />

      <AmbientParticles />

      {/* Split Screen Container */}
      <div className="w-full flex min-h-screen z-10">
        
        {/* LEFT COLUMN: Glass Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-12 lg:p-16 max-w-2xl mx-auto lg:mx-0">
          
          {/* Requirement 1: Official Company Branding */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-pink-500 shadow-lg shadow-blue-500/30 ring-1 ring-white/30"
            >
              <Building2 className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-lg font-serif font-semibold text-white tracking-tight flex flex-col justify-center leading-none">
                <span>ArthaNova</span>
                <span className="text-[0.60em] font-medium tracking-widest text-[#D4AF37] uppercase mt-1">Accounts</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mt-1">
                Tax & Corporate Advisory
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="my-auto py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.06] backdrop-blur-[24px] p-8 sm:p-10 rounded-[30px] border border-white/12 shadow-[0_30px_70px_rgba(0,0,0,0.5)] space-y-6 relative overflow-hidden"
            >
              {/* Subtle glass line highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Admin Authentication
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Welcome back
                </h2>
                <p className="text-xs text-slate-300">
                  Access partner metrics, client inquiries, and firm analytics.
                </p>
              </div>

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 font-semibold flex items-start gap-3 backdrop-blur-md"
                >
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Requirement 2: Email Field without prefilled demo email */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400/80" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-11 pr-4 py-3.5 text-xs sm:text-sm bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400/80" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-11 pr-4 py-3.5 text-xs sm:text-sm bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-blue-500 rounded-md border-white/20 bg-white/5 focus:ring-blue-500/50 cursor-pointer"
                    />
                    <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                      Remember session (JWT token)
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white rounded-2xl text-xs sm:text-sm font-extrabold shadow-[0_10px_30px_rgba(59,130,246,0.4)] transition-all cursor-pointer disabled:opacity-50 border border-white/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Authenticating JWT...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to Admin Portal</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Security Footer */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>JWT Authorized Session</span>
            </div>
            <span className="text-slate-500 text-[11px]">v2.4 Production</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Requirements 3-9 Animated Mascot Illustration Section */}
        <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 overflow-hidden bg-[#0A1D3C]/40 border-l border-white/10 backdrop-blur-3xl">
          
          {/* Mouse Responsive Lighting Layer */}
          <motion.div
            animate={{
              x: mousePos.x * 60,
              y: mousePos.y * 60,
            }}
            transition={{ type: 'spring', damping: 40, stiffness: 150 }}
            className="w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] absolute pointer-events-none"
          />

          {/* Mascot Section Container */}
          <TeddyMascotSection />
        </div>

      </div>
    </div>
  );
};
