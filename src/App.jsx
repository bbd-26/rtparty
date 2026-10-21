import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Gift, Check, X, Sparkles } from 'lucide-react';

// 引入你放在 assets 資料夾內的圖片
// (如果你的副檔名是 .png，請把這裡的 .jpg 改成 .png)
import page1Img from './assets/page1.jpg';
import page2Img from './assets/page2.jpg';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleRSVP = (status) => {
    setToastMsg(status === 'accept' ? '太棒了！已為您保留席位 🎄' : '真可惜，期待下次相聚 ❄️');
    setTimeout(() => setToastMsg(''), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4 font-sans selection:bg-pink-200 py-10">
      <div className="snow-bg" />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center cursor-pointer group"
            onClick={() => setIsOpened(true)}
          >
            {/* 封面標題 */}
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="mb-10 text-center"
            >
              <span className="px-4 py-1.5 rounded-full bg-christmas-pink text-christmas-red text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-sm">
                Exclusive Event
              </span>
              <h1 className="font-serif text-3xl text-stone-800 font-bold flex items-center gap-2">
                <Sparkles className="text-christmas-gold w-6 h-6" />
                Merry Christmas
              </h1>
              <p className="text-stone-500 text-sm mt-2">輕觸信封，開啟專屬邀請函</p>
            </motion.div>

            {/* 精緻質感信封 */}
            <div className="relative w-80 h-52 bg-gradient-to-br from-christmas-red to-[#6B1515] rounded-xl shadow-2xl overflow-hidden group-hover:shadow-[0_20px_50px_rgba(139,28,28,0.3)] transition-shadow duration-500">
              <div className="absolute inset-0 opacity-20 border-[1px] border-white/40 m-2 rounded-lg" />
              <div className="absolute top-0 w-0 h-0 border-l-[160px] border-r-[160px] border-t-[100px] border-l-transparent border-r-transparent border-t-white/10" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-tr from-yellow-600 to-christmas-gold rounded-full shadow-lg flex items-center justify-center border-2 border-[#AA8529]">
                <Mail className="text-white w-6 h-6" />
              </div>
            </div>
          </motion.div>

        ) : (

          <motion.div
            key="card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="relative z-20 w-full max-w-lg"
          >
            {/* 毛玻璃卡片主體 */}
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white p-4 sm:p-8 overflow-hidden">
              
              {/* 頂部裝飾區塊 */}
              <div className="text-center mb-6 relative">
                <div className="w-16 h-16 bg-christmas-pink rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-inner rotate-3">
                  <Gift className="text-christmas-red w-8 h-8" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-stone-800">您的專屬聖誕邀請</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-christmas-red to-christmas-pink mx-auto mt-4 rounded-full" />
              </div>

              {/* 圖片展示區 (替換原本的 PDF) */}
              <div className="relative w-full max-h-[60vh] overflow-y-auto rounded-2xl shadow-inner border border-stone-200 bg-stone-50 p-3 sm:p-4 custom-scrollbar">
                <div className="flex flex-col gap-4">
                  <img src={page1Img} alt="邀請函第一頁" className="w-full h-auto rounded-xl shadow-sm border border-stone-100" />
                  <img src={page2Img} alt="邀請函第二頁" className="w-full h-auto rounded-xl shadow-sm border border-stone-100" />
                </div>
              </div>

              {/* 回覆按鈕群 */}
              <div className="mt-8 flex flex-col gap-3">
                <button onClick={() => handleRSVP('accept')} className="w-full py-4 bg-stone-900 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2">
                  <Check className="w-5 h-5 text-christmas-gold" /> 我將準時出席
                </button>
                <button onClick={() => handleRSVP('decline')} className="w-full py-4 bg-white text-stone-500 rounded-2xl font-medium border border-stone-200 hover:bg-stone-50 transition-colors flex justify-center items-center gap-2">
                  <X className="w-5 h-5" /> 抱歉，不克出席
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 質感 Toast 提示 */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 w-max max-w-[90vw]"
          >
            <Sparkles className="text-christmas-gold w-5 h-5" />
            <span className="text-sm font-medium">{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}