import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function MySuperpower() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 'intro',
            title: 'My Superpower',
            component: <IntroSlide />
        },
        {
            id: 'magician-1',
            title: 'I\'m a Magician',
            component: <MagicianSlide1 />
        },
        {
            id: 'magician-2',
            title: 'I\'m a Magician',
            component: <MagicianSlide2 />
        },
        {
            id: 'lottery',
            title: 'But...',
            component: <LotterySlide />
        },
        {
            id: 'pool-1',
            title: 'The Pool Story',
            component: <PoolSlide1 />
        },
        {
            id: 'pool-2',
            title: 'The Pool Story',
            component: <PoolSlide2 />
        },
        {
            id: 'billiards',
            title: 'I Mean... Billiards!',
            component: <BilliardsTableSlide />
        },
        {
            id: 'pov',
            title: 'The Moment',
            component: <POVSlide />
        },
        {
            id: 'terrible',
            title: 'But...',
            component: <TerribleSlide />
        },
        {
            id: 'dejavu',
            title: '',
            component: <DejavuSlide />
        },
        {
            id: 'conclusion',
            title: 'Conclusion',
            component: <ConclusionSlide />
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col">
            <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8">
                <div className="w-full max-w-6xl">
                    {slides[currentSlide].component}
                </div>
            </div>

            <div className="pb-6 md:pb-8 px-4 md:px-8 flex items-center justify-between">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="flex items-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed rounded-lg text-white transition-all text-sm md:text-base"
                >
                    <ChevronLeft size={20} className="hidden md:block" />
                    <ChevronLeft size={16} className="md:hidden" />
                    <span className="hidden md:inline">Previous</span>
                    <span className="md:hidden">Prev</span>
                </button>

                <div className="flex gap-1 md:gap-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 rounded-full transition-all ${
                                index === currentSlide
                                    ? 'w-6 md:w-8 bg-white'
                                    : 'w-2 bg-white/30'
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="flex items-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed rounded-lg text-white transition-all text-sm md:text-base"
                >
                    <span className="hidden md:inline">Next</span>
                    <span className="md:hidden">Next</span>
                    <ChevronRight size={20} className="hidden md:block" />
                    <ChevronRight size={16} className="md:hidden" />
                </button>
            </div>
        </div>
    );
}

function IntroSlide() {
    return (
        <div className="text-center space-y-6 lg:space-y-8 animate-fade-in px-4">
            <div className="space-y-3 lg:space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                    My Superpower
                </h1>
                <div className="text-2xl md:text-3xl text-blue-200">
                    Hi, I'm <span className="text-yellow-300 font-bold text-4xl md:text-5xl">Angel</span>
                </div>
            </div>

            <div className="mt-8 lg:mt-12 p-6 lg:p-8 bg-white/10 backdrop-blur rounded-2xl max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                    And I have a <span className="text-yellow-300 font-semibold">funny story</span> about my superpower...
                </p>
            </div>
        </div>
    );
}

function MagicianSlide1() {
    return (
        <div className="text-center space-y-8 lg:space-y-12 animate-fade-in px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                I'm a <span className="text-purple-300">Magician</span> 🔮
            </h2>

            <div className="relative">
                <div className="text-6xl md:text-7xl lg:text-8xl mb-8 animate-float">
                    🧙‍♂️
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                </div>
            </div>

            <div className="space-y-4 lg:space-y-6 max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl text-white font-semibold">
                    I can see <span className="text-yellow-300">the future</span>
                </p>
                <p className="text-lg md:text-xl text-blue-200">
                    (Well... sometimes... my own future... kind of...)
                </p>
            </div>
        </div>
    );
}

function MagicianSlide2() {
    return (
        <div className="text-center space-y-8 lg:space-y-12 animate-fade-in px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                I'm a <span className="text-purple-300">Magician</span> 🔮
            </h2>

            <div className="relative">
                <div className="text-6xl md:text-7xl lg:text-8xl mb-8 animate-float">
                    🧙‍♂️
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                </div>
            </div>

            <div className="space-y-4 lg:space-y-6 max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl text-white font-semibold">
                    I can see <span className="text-yellow-300">the future</span>
                </p>
                <p className="text-lg md:text-xl text-blue-200">
                    (Well... sometimes... my own future... kind of...)
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-12 text-white/70 text-base lg:text-lg max-w-4xl mx-auto animate-fade-in">
                <div className="p-3 lg:p-4 bg-red-500/20 rounded-lg">
                    ❌ Not 100 years ahead
                </div>
                <div className="p-3 lg:p-4 bg-red-500/20 rounded-lg">
                    ❌ Not Elon Musk's future
                </div>
                <div className="p-3 lg:p-4 bg-red-500/20 rounded-lg">
                    ❌ Not my cousin's future
                </div>
            </div>
        </div>
    );
}

function LotterySlide() {
    return (
        <div className="text-center space-y-8 lg:space-y-12 animate-fade-in px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                But I'm Still <span className="text-red-400">Poor</span> 😅
            </h2>

            <div className="text-7xl md:text-8xl lg:text-9xl animate-bounce-slow">
                💸
            </div>

            <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8">
                <div className="p-6 lg:p-8 bg-white/10 backdrop-blur rounded-2xl">
                    <p className="text-2xl md:text-3xl text-white mb-3 lg:mb-4">
                        I can't control it
                    </p>
                    <p className="text-xl md:text-2xl text-red-300">
                        Obviously, I haven't won the lottery 🎰
                    </p>
                </div>

                <div className="flex justify-center gap-2 md:gap-4 text-4xl md:text-5xl lg:text-6xl">
                    <span className="animate-bounce" style={{animationDelay: '0s'}}>7</span>
                    <span className="animate-bounce" style={{animationDelay: '0.1s'}}>?</span>
                    <span className="animate-bounce" style={{animationDelay: '0.2s'}}>?</span>
                    <span className="animate-bounce" style={{animationDelay: '0.3s'}}>?</span>
                    <span className="animate-bounce" style={{animationDelay: '0.4s'}}>?</span>
                    <span className="animate-bounce" style={{animationDelay: '0.5s'}}>?</span>
                </div>
            </div>
        </div>
    );
}

function PoolSlide1() {
    return (
        <div className="text-center space-y-8 lg:space-y-12 animate-fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                The First Time: Playing <span className="text-blue-400">"Pool"</span>
            </h2>

            <div className="relative mx-auto w-72 h-48 md:w-80 md:h-56 lg:w-96 lg:h-64 bg-blue-400 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-4 bg-blue-300 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-5xl md:text-6xl animate-float">
                        🏊‍♂️
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="p-6 lg:p-8 bg-white/10 backdrop-blur rounded-2xl">
                    <p className="text-2xl md:text-3xl text-white mb-3 lg:mb-4">
                        Yes, <span className="text-blue-300 font-bold">pool</span>!
                    </p>
                    <p className="text-xl md:text-2xl text-white/80">
                        That's what we call it in Argentina 🇦🇷
                    </p>
                </div>
            </div>
        </div>
    );
}

function PoolSlide2() {
    return (
        <div className="text-center space-y-4 lg:space-y-6 animate-fade-in px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
                The First Time: Playing "Pool" 🤔
            </h2>

            <div className="relative mx-auto w-64 h-44 md:w-80 md:h-52 bg-blue-400 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-4 bg-blue-300 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-4xl md:text-5xl animate-float">
                        🏊‍♂️
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-3 lg:space-y-4">
                <div className="text-4xl md:text-5xl animate-bounce-slow">
                    🤔
                </div>

                <div className="p-4 md:p-6 bg-red-500/20 backdrop-blur rounded-2xl border-2 border-red-400">
                    <p className="text-xl md:text-2xl text-white mb-2 lg:mb-3">
                        WAIT! ✋
                    </p>
                    <p className="text-lg md:text-xl text-white">
                        In Argentina we say "pool"...
                    </p>
                    <p className="text-base md:text-lg text-blue-200 mt-2 lg:mt-3">
                        But I don't mean a swimming pool! 🏊‍♂️
                    </p>
                    <p className="text-sm md:text-base text-white/60 mt-2 lg:mt-3 italic">
                        (Maybe this was a demonstration of my power...
                        <br />someone would correct me! 😅)
                    </p>
                </div>
            </div>
        </div>
    );
}

function BilliardsTableSlide() {
    return (
        <div className="text-center space-y-6 lg:space-y-12 animate-fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                I Mean... <span className="text-green-400">Billiards!</span> 🎱
            </h2>

            <div className="relative mx-auto max-w-4xl">
                <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl">
                    <div className="bg-green-600 rounded-2xl p-4 md:p-6 lg:p-8 relative">
                        {/* Billiard balls arrangement */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                            <div className="relative">
                                {/* White ball */}
                                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-xl md:text-2xl">
                                    ⚪
                                </div>
                            </div>

                            <div className="relative grid gap-1 md:gap-2" style={{gridTemplateColumns: 'repeat(5, 1fr)'}}>
                                {/* Triangle formation */}
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full shadow-lg col-start-3"></div>

                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full shadow-lg col-start-2"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-600 rounded-full shadow-lg col-start-4"></div>

                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-600 rounded-full shadow-lg col-start-2"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-black rounded-full shadow-lg col-start-3 flex items-center justify-center text-white font-bold text-xs md:text-sm">8</div>
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-500 rounded-full shadow-lg col-start-4"></div>

                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-700 rounded-full shadow-lg col-start-1"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-pink-500 rounded-full shadow-lg col-start-2"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-600 rounded-full shadow-lg col-start-3"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-800 rounded-full shadow-lg col-start-4"></div>

                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-800 rounded-full shadow-lg col-start-1"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-800 rounded-full shadow-lg col-start-2"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-700 rounded-full shadow-lg col-start-3"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-900 rounded-full shadow-lg col-start-4"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-pink-700 rounded-full shadow-lg col-start-5"></div>
                            </div>
                        </div>

                        {/* Corner pockets */}
                        <div className="absolute top-2 left-2 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-black rounded-full"></div>
                        <div className="absolute top-2 right-2 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-black rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-black rounded-full"></div>
                        <div className="absolute bottom-2 right-2 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-black rounded-full"></div>
                    </div>
                </div>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto">
                This is what I meant! Not swimming 🏊‍♂️ but playing billiards 🎱
            </p>
        </div>
    );
}

function POVSlide() {
    return (
        <div className="text-center space-y-4 lg:space-y-6 animate-fade-in px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                The <span className="text-yellow-300">Exact Moment</span>
            </h2>

            <div className="relative mx-auto max-w-4xl h-64 md:h-80 bg-gradient-to-br from-green-700 to-green-900 rounded-3xl overflow-hidden shadow-2xl">
                {/* POV perspective of billiards table */}
                <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-16">
                    {/* Cue stick */}
                    <div className="relative">
                        <div className="w-2 h-72 md:h-96 bg-gradient-to-t from-yellow-900 via-yellow-800 to-yellow-700 rounded-full origin-bottom transform -rotate-12 shadow-xl"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-24 md:h-32 bg-gradient-to-t from-blue-600 to-blue-400 rounded-full"></div>
                    </div>
                </div>

                {/* White ball in perspective */}
                <div className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-2xl flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white to-gray-200 rounded-full"></div>
                    </div>
                </div>

                {/* Other balls in distance */}
                <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2 opacity-70">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500 rounded-full"></div>
                </div>

                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <div className="max-w-3xl mx-auto p-4 md:p-6 bg-purple-500/20 backdrop-blur rounded-2xl border-2 border-purple-400">
                <p className="text-xl md:text-2xl text-white font-semibold mb-2 lg:mb-3">
                    ✨ Suddenly... ✨
                </p>
                <p className="text-lg md:text-xl text-white">
                    I realized I had seen this <span className="text-yellow-300">exact scene</span> before
                </p>
                <p className="text-base md:text-lg text-blue-200 mt-2 lg:mt-3">
                    From my own eyes... in a dream... years ago
                </p>
            </div>
        </div>
    );
}

function TerribleSlide() {
    return (
        <div className="text-center space-y-6 lg:space-y-8 animate-fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                But... it <span className="text-red-400">didn't help</span> 😅
            </h2>

            <div className="text-6xl md:text-7xl animate-bounce-slow">
                🎱❌
            </div>

            <div className="max-w-3xl mx-auto space-y-3 lg:space-y-4">
                <div className="p-4 md:p-6 bg-red-500/20 backdrop-blur rounded-2xl border-2 border-red-400">
                    <p className="text-xl md:text-2xl text-white mb-2 lg:mb-3">
                        Right after that moment...
                    </p>
                    <p className="text-2xl md:text-3xl text-red-300 font-bold mb-2 lg:mb-3">
                        I played <span className="text-red-500">TERRIBLY</span>
                    </p>
                    <p className="text-lg md:text-xl text-white/80">
                        Because I didn't know how to play billiards! 🤷‍♂️
                    </p>
                </div>

                <div className="p-4 md:p-5 bg-white/10 backdrop-blur rounded-xl">
                    <p className="text-base md:text-lg text-white/70">
                        My dreams didn't help me at all...
                        <br />
                        They were just random moments
                    </p>
                </div>
            </div>
        </div>
    );
}

function DejavuSlide() {
    return (
        <div className="flex items-center justify-center animate-fade-in h-full px-4">
            <div className="text-center">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white animate-pulse-slow mb-4 lg:mb-6">
                    Déjà vu?
                </div>
                <div className="text-4xl md:text-5xl animate-float">
                    🤔
                </div>
            </div>
        </div>
    );
}

function ConclusionSlide() {
    return (
        <div className="text-center space-y-8 lg:space-y-12 animate-fade-in px-4">
            <div className="text-6xl md:text-7xl lg:text-8xl mb-6 lg:mb-8 animate-float">
                🧙‍♂️✨
            </div>

            <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
                <div className="p-6 lg:p-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur rounded-2xl border-2 border-purple-400">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-4 lg:mb-6">
                        So... am I really a magician? 🤷‍♂️
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-red-300 mb-4 lg:mb-6">
                        I can't change the future...
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white">
                        But at least it was <span className="text-green-400 font-bold">funny!</span> 😄
                    </p>
                </div>

                <div className="text-3xl md:text-4xl lg:text-5xl text-white mt-8 lg:mt-12">
                    Thank you! 🎉
                </div>
            </div>
        </div>
    );
}

// Add these custom animations to your CSS or inline styles
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
  }
  
  @keyframes pulse-slow {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.6s ease-out;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-bounce-slow {
    animation: bounce-slow 2s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 2s ease-in-out infinite;
  }
`;
document.head.appendChild(style);