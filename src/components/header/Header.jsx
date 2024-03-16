const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center pt-4 md:pt-8 mb-10">
                <div className="lg:hidden dropdown">
                    <div tabIndex={0}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 font-bold flex flex-col items-center gap-4">
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                        <li>Search</li>
                    </ul>
                </div>
                <h1 className=" text-2xl md:text-3xl font-bold text-btnTwo">Recipe Calories</h1>
                <ul className="hidden lg:flex justify-center items-center gap-8 text-xl text-black">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
                <div className=" flex justify-center items-center gap-4">
                    <div className=" hidden w-64 h-12 rounded-[50px]  md:flex justify-center items-center gap-2 bg-[#150B2B0D]">
                        <svg width="19.000000" height="19.000000" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs />
                            <path id="Vector" d="M18 18L12.8 12.8M14.99 7.49C14.99 5.51 14.2 3.6 12.8 2.19C11.39 0.78 9.48 -0.01 7.49 -0.01C5.51 -0.01 3.6 0.78 2.19 2.19C0.78 3.6 -0.01 5.51 -0.01 7.49C-0.01 9.48 0.78 11.39 2.19 12.8C3.6 14.2 5.51 14.99 7.49 14.99C9.48 14.99 11.39 14.2 12.8 12.8C14.2 11.39 14.99 9.48 14.99 7.49Z" stroke="#150B2B" strokeOpacity="0.700000" strokeWidth="1.500000" strokeLinejoin="round" />
                        </svg>
                        <input className=" bg-transparent border-none outline-none" type="text" placeholder="Search" />
                    </div>
                    <svg width="48.000000" height="48.000000" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <clipPath id="clip3_244">
                                <rect id="Frame" width="32.000000" height="32.000000" transform="translate(8.000000 8.000000)" fill="white" fillOpacity="0" />
                            </clipPath>
                        </defs>
                        <rect id="Frame 5" rx="24.000000" width="48.000000" height="48.000000" fill="#0BE58A" fillOpacity="1.000000" />
                        <rect id="Frame" width="32.000000" height="32.000000" transform="translate(8.000000 8.000000)" fill="#FFFFFF" fillOpacity="0" />
                        <g clipPath="url(#clip3_244)">
                            <path id="Vector" d="M31.97 32.96C31.04 31.73 29.83 30.73 28.45 30.04C27.07 29.35 25.54 28.99 23.99 29C22.45 28.99 20.92 29.35 19.54 30.04C18.16 30.73 16.95 31.73 16.02 32.96M35.65 26.85C36.23 24.49 36.08 22 35.21 19.73C34.35 17.45 32.81 15.5 30.81 14.12C28.8 12.74 26.43 12 23.99 12C21.56 12 19.19 12.74 17.18 14.12C15.18 15.5 13.64 17.45 12.78 19.73C11.91 22 11.76 24.49 12.34 26.85C12.92 29.21 14.2 31.34 16.02 32.96C18.21 34.92 21.05 36 23.99 36C26.94 36 29.78 34.92 31.97 32.96C33.79 31.34 35.07 29.21 35.65 26.85ZM26.82 23.82C26.07 24.57 25.06 25 23.99 25C22.93 25 21.92 24.57 21.17 23.82C20.42 23.07 19.99 22.06 19.99 21C19.99 19.93 20.42 18.92 21.17 18.17C21.92 17.42 22.93 17 23.99 17C25.06 17 26.07 17.42 26.82 18.17C27.57 18.92 27.99 19.93 27.99 21C27.99 22.06 27.57 23.07 26.82 23.82Z" stroke="#150B2B" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round" />
                        </g>
                    </svg>
                </div>
            </nav>
            <section>
                <div className="space-y-10 w-full h-fit xl:h-[700px] py-14 px-2 lg:px-44 rounded-3xl text-center flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat text-white relative" style={{ backgroundImage: "url('../../public/images/banner.jpg')" }}>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#150B2B] to-[#150b2b48] opacity-60"></div>
                    <h1 className="text-xl lg:text-5xl font-bold relative z-10">Uncover Culinary Mastery Your Personalized Cooking Journey Begins Here!</h1>
                    <p className="relative z-10">Elevate your culinary skills with our personalized cooking classes! Explore flavors, techniques, and create unforgettable dishes tailored just for you.</p>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-10 text-lg">
                        <button className=" w-44 h-16 bg-[#0BE58A] text-black font-bold rounded-[50px]">Explore Now</button>
                        <button className=" w-44 h-16 bg-transparent rounded-[50px] border-white border">Our Feedback</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;