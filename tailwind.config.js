/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			body: '#030014',
    			greenish: '#21b573',
    			yellowish: '#faaf3a',
    			blueish: '#3b81f5'
    		},
    		backgroundImage: {
    			'dark-gradient': 'linear-gradient(to top left, rgba(79, 2, 57, .25), rgba(1, 80, 110, 0.3))',
    			'dark-gradient-alt': 'linear-gradient(to top left, rgba(1, 80, 110, 0.3), rgba(79, 2, 57, .25))',
				'linear-fade': 'linear-gradient(rgba(238, 224, 255, 0.06) 0%, rgba(238, 224, 255, 0) 100%)',
				'linear-fade2': 'linear-gradient(rgba(238, 224, 255, 0.08) 0%, rgba(238, 224, 255, 0) 100%)',
				'linear-fade3': 'linear-gradient(rgba(238, 224, 255, 0.12) 0%, rgba(238, 224, 255, 0) 100%)',
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			moveLeftRight: {
    				'0%, 100%': {
    					transform: 'translateX(0)'
    				},
    				'50%': {
    					transform: 'translateX(40px)'
    				}
    			},
    			'border-beam': {
    				'100%': {
    					'offset-distance': '100%'
    				}
    			},
    			shine: {
    				'0%': {
    					'background-position': '0% 0%'
    				},
    				'50%': {
    					'background-position': '100% 100%'
    				},
    				to: {
    					'background-position': '0% 0%'
    				}
    			}
    		},
    		animation: {
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'spin-slow': 'spin 4s linear infinite',
    			moveLeftRight: 'moveLeftRight 10s ease-in-out infinite',
    			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
    			shine: 'shine var(--duration) infinite linear'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
