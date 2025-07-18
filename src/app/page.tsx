import { SmartphoneCharging } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Clover() {
  return (
    <div className="bg-[#313131]">
      <Head>
        <title>Power - Clover Sustainability Rewards</title>
        <meta name="description" content="Earn rewards for sustainable energy habits with Clover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
      <section className="px-5 md:px-[5%] py-16 h-[900px] flex items-center justify-center">
  <div className="w-full flex flex-col items-center justify-center">
    <Image
      src="/cloverlogo.png"
      alt="Clover Logo"
      width={400}
      height={150}
      className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
      priority
    />
    <h2 className='md:text-[155px] text-7xl text-[#C79FC4] mt-5 font-extralight text-center'>clover</h2>
  </div>
</section>

        {/* Coin Image */}
        {/* <div className="my-12 md:my-24 flex justify-center">
  <div className="w-full rounded-2xl px-4">
    <Image 
      src="/logo.jpg" 
      alt="Clover Coin" 
      width={800} 
      height={320}
      className="w-full h-auto rounded-2xl object-contain"
      priority
    />
  </div>
</div> */}

        {/* Clover Description */}
        <section className="px-6 bg-[#bfd3c1] md:px-12 lg:px-24 py-12 md:py-20">

                    <p className="text-primary flex flex-col items-center  bg-[#313131] text-[#313131] mt-50 mb-50 bg-clip-text  font-light text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed md:leading-[3rem] lg:leading-[3.5rem]  tracking-wider">
            {/* At Clover believe that driving environmental impact should be made easy for everyone. */}
                       At Clover believe that driving environmental impact should be made 
                       <span>easy for everyone.</span>

          </p>
          <p className="text-primary bg-[#313131] text-[#313131] mt-50 mb-50 bg-clip-text  font-light text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed md:leading-[3rem] lg:leading-[3.5rem]  tracking-wider">
            {/* At Clover believe that driving environmental impact should be made easy for everyone. */}
           Clover  rewards users for their sustainable energy habits.
             By achieving milestones and
            leveling up, users can earn Clover Rewards, which can be converted into
            Retail Rewards or Clover Coin.
          </p>
        </section>

        {/* Elements Section */}
<section className="px-5 md:px-[5%] py-20 md:py-48">
  {/* Colorful Heading */}
  <div className="mb-20 md:mb-32 text-center">
    <h2 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extralight  mb-6">
      {/* <span className="text-red-500">F</span>
      <span className="text-green-400">I</span>
      <span className="text-blue-400">V</span>
      <span className="text-yellow-400">E</span> */}
      <span className="text-[#FE0002] ml-4  font-normal">E</span>
      <span className="text-[#E36A35] font-normal">l</span>
      <span className="text-[#FEA211] font-normal">e</span>
      <span className="text-yellow-200 font-normal">m</span>
      <span className="text-[#61D337] font-normal">e</span>
      <span className="text-[#049BDA] font-normal">n</span>
      <span className="text-[#305BAA] font-normal">t</span>
      <span className="text-[#C79FC4] font-normal">s</span>
    </h2>
    <p className="text-light font-light text-xl md:text-2xl max-w-4xl mx-auto">
      Discover how each element represents a different aspect of sustainable living
    </p>
  </div>

  <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between gap-20 md:gap-10 lg:gap-0">
    <div className="max-w-md">
      <Image src="/fire.png" alt="Fire" width={100} height={100} className="w-24" />
      <h3 className="text-white font-extralight text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl mt-3 2xl:mt-8 2xl:mb-2">Fire</h3>
      <p className="text-light font-light text-xl md:text-2xl lg:text-xl 2xl:text-3xl leading-relaxed md:leading-[2.5rem] lg:leading-[2rem] 2xl:leading-[3.5rem]">
        Overall consumption reduction - Earn achievements by reducing your
        overall energy consumption and making your home more energy-efficient.
      </p>
    </div>
         
            <div className="max-w-md">
<Image 
  src="/air.png" 
  alt="Air" 
  width={100} 
  height={100} 
  className="w-24 filter-orange" 
  style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(89%) saturate(354%) hue-rotate(334deg) brightness(99%) contrast(98%)' }}
/>      <h3 className="text-white font-extralight text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl mt-3 2xl:mt-8 2xl:mb-2">Air</h3>
      <p className="text-light font-light text-xl md:text-2xl lg:text-xl 2xl:text-3xl leading-relaxed md:leading-[2.5rem] lg:leading-[2rem] 2xl:leading-[3.5rem]">
        Regulating or improving air quality - Achieve milestones by
        improving indoor air quality, reducing pollution, and promoting a healthier
        environment.
      </p>
    </div>
    
  </div>
  
  <div className="my-20 lg:my-0 2xl:my-0 flex justify-center">
    <Image
      src="/cloverlogo.png"
      alt="Clover Logo"
      width={200}
      height={200}
      className="w-48 md:w-64 2xl:w-auto"
    />
  </div>
  
  <div className="flex flex-col md:flex-row lg:items-center justify-between gap-20 md:gap-10 lg:gap-0">
   <div className="max-w-md">
      
      <Image src="/earth.png" alt="Earth" width={100} height={100} className="w-24" />
      <h3 className="text-white font-extralight text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl mt-3 2xl:mt-8 2xl:mb-2">Earth</h3>
      <p className="text-light font-light text-xl md:text-2xl lg:text-xl 2xl:text-3xl leading-relaxed md:leading-[2.5rem] lg:leading-[2rem] 2xl:leading-[3.5rem]">
        Reduction of Carbon emissions - Level up by reducing your carbon
        footprint, using renewable energy sourcing and promoting sustainable practices.
      </p>
    </div>



    <div className="max-w-md">
      <Image src="/water.png" alt="Water" width={100} height={100} className="w-24" />
      <h3 className="text-white font-extralight text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl mt-3 2xl:mt-8 2xl:mb-2">Water</h3>
      <p className="text-light font-light text-xl md:text-2xl lg:text-xl 2xl:text-3xl leading-relaxed md:leading-[2.5rem] lg:leading-[2rem] 2xl:leading-[3.5rem]">
        Minimisation in water usage - Earn achievements by conserving water,
        reducing waste, and promoting sustainable water management practices.
      </p>
    </div>
  </div>
  
  <div className="flex flex-col lg:flex-row lg:items-center gap-8 p-8 md:p-12 2xl:p-16 bg-[#282828] rounded-[50px] mt-20 md:mt-48">
    <div className="lg:w-2/5">
      <Image src="/wheel.png" alt="Ether Wheel" width={300} height={300} />
    </div>
    <div className="lg:w-3/5">
      <h2 className="text-white font-extralight text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl uppercase">
        Earning<span className="text-pink-300 font-extralight"> Ether</span> Achievements
      </h2>
      <p className="text-light font-light text-lg md:text-xl 2xl:text-2xl leading-relaxed md:leading-[3rem] 2xl:leading-[4rem] mt-4">
        In addition to the four leaves, users can earn Ether achievements by
        participating in quests, challenges, and data contribution. These
        achievements can be redeemed for Clover Tokens, which can be
        converted into Retail Rewards or Clover Coin.
      </p>
    </div>
  </div>
</section>

{/* <section className='bg-[#bfd3c1] p-5'> */}
        {/* Retail Rewards Section */}
        <section className="px-5 md:px-[5%] bg-[#313131]">
          <div className="grid lg:grid-cols-2 gap-20 md:gap-10 lg:gap-10 2xl:gap-48 items-center lg:gap-y-32">
            <div>
              <h3 className="text-white font-extralight uppercase text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl">
               <span className="text-primary text-green-500">Retail</span>  REWARDS
              </h3>
              <p className="text-light font-light text-lg md:text-xl 2xl:text-2xl leading-relaxed lg:pr-10 2xl:pr-24">
                With Clover Tokens, users can redeem a variety of Retail Rewards
                from our partner retailers and manufacturers. This will enable them
                to indirectly reduce carbon emissions through promotional offers.
              </p>
            </div>
            
            <div>
              <ul className="space-y-6">
                {[
                  {text: "Discounts on sustainable products and services"},
                  {text: "Free Trials of energy-efficient appliances and devices"},
                  {text: "Exclusive access to eco-friendly fashion and lifestyle brands"},
                  {text: "Gift cards to popular retailers and restaurants"}
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Image src="/bullet.png" alt="Bullet" width={20} height={20} />
                    <p className="text-white font-light text-lg md:text-xl 2xl:text-3xl leading-relaxed">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <Image src="/coin3.jpg" 
            className="w-full h-auto object-cover rounded-3xl shadow-xl"
               alt="Clover Coin" width={600} height={600} />
            </div>
            
            <div>
              <h3 className="text-white font-extralight uppercase text-4xl md:text-8xl lg:text-6xl 2xl:text-8xl">
                <span className="text-primary text-green-500">Clover</span> Coin
              </h3>
              <p className="text-light font-light text-lg md:text-xl 2xl:text-2xl leading-relaxed">
                The Clover Coin is a family-friendly environment designed to educate
                the younger generation about blockchain and cryptocurrency.
                Gamification will also increase transparency in carbon markets,
                making it easier for individuals to make informed choices about
                their energy consumption.
              </p>
            </div>
          </div>
        </section>

        {/* Aether Coin Section */}
       <section className="px-5 md:px-[5%] m-4 bg-[#313131] py-16 md:py-32">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* Content on the left */}
      <div className="lg:w-1/2">
        <h2 className="text-green-500 font-light text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase mb-6">
           
           <span className="text-[#FE0002] ml-4  font-normal">A</span>
      {/* <span className="text-[#FEA211] font-normal">l</span> */}
      <span className="text-[#E36A35] font-normal">e</span>
      <span className="text-yellow-200 font-normal">t</span>
      <span className="text-[#61D337] font-normal">h</span>
      {/* <span className="text-[#049BDA] font-normal">n</span> */}
      <span className="text-[#305BAA] font-normal">e</span>
      <span className="text-[#C79FC4] font-normal">r</span>
           
           
            <span className=' ml-2 text-white'>Coin</span>
        </h2>
        <p className="text-light font-light text-lg md:text-xl 2xl:text-2xl leading-relaxed">
          As you progress on your journey, you&apos;ll be rewarded with Clover
          Aether coins, the ultimate symbol of sustainable energy achievement.
          The Aether Coin represents the pinnacle of our collective efforts to
          create a more sustainable future, where community collaboration and
          innovation converge to make a positive impact on the environment.
        </p>
      </div>

      {/* Image on the right */}
     <div className="lg:w-1/2 flex justify-center">
  <div className="relative w-full rounded-[3rem] overflow-hidden">
    <Image 
      src="/coin4.jpg" 
      alt="Aether Coin" 
      width={600} 
      height={600}
      className="w-full h-auto object-cover rounded-[3rem] shadow-xl"
      priority
    />
  </div>
</div>
    </div>
  </div>
</section>

    


        {/* Mobile App Section */}
   <section className="px-5 bg-[#313131] md:px-[5%] py-20 md:py-32">
  <div className="max-w-7xl mx-auto">
    {/* Main heading at the top */}
    <div className="w-full text-center mb-5 md:mb-10">
      <h2 className="text-white font-extralight text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[5rem] lg:leading-[6rem] 2xl:leading-[8rem] uppercase">
        Stay on top of your <span className="text-primary text-green-500">achievements</span>
      </h2>
    </div>

    {/* Content row */}
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Left side - Progress tracking section */}
      <div className="lg:w-1/2">
        <div className="max-w-4xl flex justify-center flex-col mx-auto lg:mx-0">
          <h3 className="text-white text-center text-3xl md:text-4xl lg:text-5xl uppercase font-extralight mb-1">
            Track your <span className='text-green-400'>Progress</span>
          </h3>
          <p className="text-gray-300 text-xl md:text-xl leading-relaxed">
            Accurately monitor your journey towards a more sustainable future. 
          </p>
          
         
        </div>
      </div>

      {/* Right side - Image */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative">
         <div className="w-80 h-[660px] p-5 rounded-[3rem] shadow-2xl overflow-hidden bg-black/20">
  <Image
    src={"/clover-app.png"}
    alt="Energy dashboard mobile app showing usage statistics"
    width={350}
    height={660}
    className="w-full h-full rounded-[2rem] object-cover"
    quality={100}
  />
</div>
          
          {/* Floating element */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <SmartphoneCharging className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* </section> */}

        {/* Earn Tokens Section */}
      <section className="px-5 md:px-[5%] bg-[#bfd3c1] py-16 md:py-24">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-[#313131] font-light text-center uppercase text-4xl md:text-5xl 2xl:text-6xl mb-16 md:mb-24">
      How to earn <span className="text-green-500">Clover </span>tokens
    </h2>
    
    <div className="space-y-8 md:space-y-12">
      {[
        {
          icon: "/token1.png",
          title: "Proof of Power",
          description: "Users share their energy usage data. Tokens are awarded based on the value and frequency of their data contributions.",
          align: "left"
        },
        {
          icon: "/token2.png",
          title: "Green Behaviour",
          description: "Users track and reduce energy consumption. They earn tokens for eco-friendly actions and completing sustainability challenges.",
          align: "right"
        },
        {
          icon: "/token3.png",
          title: "Carbon Credits",
          description: "Carbon credits are earned based on staking duration. Users redeem these credits for various rewards and benefits",
          align: "left"
        },
        // {
        //   icon: "/token4.png",
        //   title: "Energy Incentives",
        //   description: "Gamification motivates customers to save energy through rewards, points, and challenges, leading to cost and environmental benefits.",
        //   align: "right"
        // },
        {
          icon: "/token5.png",
          title: "Family Friendly",
          description: "Clover token provides a fun and interactive way for children to learn about cryptocurrency and blockchain technology.",
          align: "right"
        },
        {
          icon: "/token7.png",
          title: " Quests and Challenges",
          description: "Gamified challenges and quests reward users for eco-friendly actions, making sustainability fun, engaging, and rewarding.",
          align: "left"
        }
      ].map((item, index) => (
        <div 
  key={index} 
  className={`flex w-full ${item.align === 'left' ? 'justify-start' : 'justify-end'}`}
>
  <div 
    className={`
      group max-w-9xl w-full p-8 md:p-10 rounded-2xl bg-[#2b2b2b] 
      shadow-lg transition-all duration-300 hover:bg-[#333333] 
      hover:shadow-2xl hover:-translate-y-1 border border-gray-700/30
      ${item.align === 'right' ? 'md:max-w-4xl' : 'md:max-w-3xl'}
    `}
  >
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/15 transition-colors duration-300">
          <Image 
            src={item.icon} 
            alt={item.title} 
            width={100} 
            height={100}
            className="w-12 h-12 md:w-14 md:h-14 object-contain filter brightness-110"
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-medium text-xl md:text-2xl mb-3 group-hover:text-green-400 transition-colors duration-300 leading-tight">
          {item.title}
        </h4>
        <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {item.description}
        </p>
      </div>
    </div>
  </div>
</div>
      ))}
    </div>
  </div>
</section>

        {/* Progress Section */}
        {/* <section className="px-8 md:px-[8%] my-20 md:my-48">
          <div>
            <h2 className="text-white font-extralight uppercase text-center text-3xl md:text-5xl">
              TRACK YOUR <span className="text-primary text-green-500">PROGRESS</span>
            </h2>
            <p className="text-para font-light text-center text-lg md:text-xl">
              Accurately monitor your journey towards a more sustainable future
            </p>
          </div>
          
          <div className="flex  2xl:flex-row items-center 2xl:items-start gap-16 mt-20">
            <div className="2xl:w-1/2">
              <Image 
                src="/clover-graph.png" 
                alt="Progress Graph" 
                width={600} 
                height={600}
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="2xl:w-1/2 space-y-10">
              {[
                {
                  color: "text-[#FF0000]",
                  title: "Fire",
                  description: "Overall consumption reduction - Earn achievements by reducing your overall energy consumption and making your home more energy-efficient."
                },
                {
                  color: "text-[#FFFF00]",
                  title: "Air",
                  description: "Regulating or improving air quality - Achieve milestones by improving indoor air quality, reducing pollution, and promoting a healthier environment."
                },
                {
                  color: "text-[#079BDB]",
                  title: "Water",
                  description: "Minimisation in water usage - Earn achievements by conserving water, reducing waste, and promoting sustainable water management practices."
                },
                {
                  color: "text-[#60D23A]",
                  title: "Earth",
                  description: "Overall consumption reduction - Earn achievements by reducing your overall energy consumption and making your home more energy-efficient."
                },
                {
                  color: "text-[#C8A2C8]",
                  title: "Ether",
                  description: "Users can earn Ether achievements by participating in quests, challenges, data contribution and Power's vehicle charging networks. These achievements can be redeemed for Clover Tokens."
                }
              ].map((item, index) => (
                <div key={index}>
                  <h3 className={`font-extralight text-xl md:text-2xl ${item.color}`}>{item.title}</h3>
                  <p className="text-white font-light text-base md:text-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}


        <section className="relative w-full overflow-hidden mb-10 md:mb-16 lg:mb-20">
  <Link href="/coming_soon" className="block group">
    {/* Background Image Container - Responsive with safe aspect ratios */}
    <div className="relative w-full h-[50vh] md:h-[75vh] lg:h-[80vh] min-h-[300px] max-h-[900px]">
      <Image
        src="/new_bg.png"
        alt="Community Background"
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20" />
    </div>

    {/* Content Container - Centered with responsive padding */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 lg:space-y-6 px-4">
        <h2 className="text-white font-light uppercase tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Join the <span className="text-green-400 font-normal">community</span>
        </h2>
        
        <p className="text-white/90 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-snug sm:leading-relaxed md:leading-relaxed max-w-[100%] md:max-w-[100%] mx-auto">
          {/* Clover is a solo and multiplayer mission.<br className="hidden sm:block" /> */}
          Join your community and compete to reach net zero together.
        </p>
      </div>
    </div>
  </Link>
</section>
      </main>
    </div>
  );
}