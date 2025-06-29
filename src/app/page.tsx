import { SmartphoneCharging } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';

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
        <section className="px-5 md:px-[5%] py-16">
          <div className="flex justify-center">
            <Image
              src="/clover-logo.png"
              alt="Clover Logo"
              width={400}
              height={150}
              className="w-full max-w-md my-16"
            />
          </div>
          
          <h3 className="text-white font-light text-center text-xl md:text-3xl 2xl:text-4xl leading-relaxed md:leading-[4rem] uppercase">
            Incentivising Carbon Reduction can encourage users to take actions
            that reduce their carbon footprint.
          </h3>
        </section>

        {/* Coin Image */}
        <div className="my-12 md:my-24 flex justify-center">
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
</div>

        {/* Clover Description */}
        <section className="px-6 md:px-12 lg:px-24 py-12 md:py-20">
          <p className="text-primary text-white font-light text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed md:leading-[3rem] lg:leading-[3.5rem] uppercase tracking-wider">
            Clover is a unique feature within the Power ecosystem that rewards
            users for their sustainable energy habits. By achieving milestones and
            leveling up, users can earn Clover Tokens, which can be converted into
            Retail Rewards or Clover Coin.
          </p>
        </section>

        {/* Elements Section */}
        <section className="px-5 md:px-[5%] py-20 md:py-48">
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
              <Image src="/earth.png" alt="Earth" width={100} height={100} className="w-24" />
              <h3 className="text-white font-extralight text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl mt-3 2xl:mt-8 2xl:mb-2">Earth</h3>
              <p className="text-light font-light text-xl md:text-2xl lg:text-xl 2xl:text-3xl leading-relaxed md:leading-[2.5rem] lg:leading-[2rem] 2xl:leading-[3.5rem]">
                Reduction of Carbon emissions - Level up by reducing your carbon
                footprint, using renewable energy sourcing and promoting sustainable practices.
              </p>
            </div>
            
            
          </div>
          
          <div className="my-20 lg:my-0 2xl:my-0 flex justify-center">
            <Image
              src="/clover-logob.png"
              alt="Clover Logo"
              width={200}
              height={200}
              className="w-48 md:w-64 2xl:w-auto"
            />
          </div>
          
          <div className="flex flex-col md:flex-row lg:items-center justify-between gap-20 md:gap-10 lg:gap-0">
           
            
            <div className="max-w-md">
              <Image src="/air.png" alt="Air" width={100} height={100} className="w-24" />
              <h3 className="text-white font-extralight text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl mt-3 2xl:mt-8 2xl:mb-2">Air</h3>
              <p className="text-light font-light text-xl md:text-2xl lg:text-xl 2xl:text-3xl leading-relaxed md:leading-[2.5rem] lg:leading-[2rem] 2xl:leading-[3.5rem]">
                Regulating or improving air quality - Achieve milestones by
                improving indoor air quality, reducing pollution, and promoting a healthier
                environment.
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
                <span className="text-primary font-extralight text-green-500">Earning Ether</span> Achievements
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

        {/* Retail Rewards Section */}
        <section className="px-5 md:px-[5%]">
          <div className="grid lg:grid-cols-2 gap-20 md:gap-10 lg:gap-10 2xl:gap-48 items-center lg:gap-y-32">
            <div>
              <h3 className="text-white font-extralight uppercase text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl">
                Retail <span className="text-primary text-green-500">REWARDS</span>
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
              <Image src="/coin2.png" alt="Clover Coin" width={600} height={600} />
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
       <section className="px-5 md:px-[5%] py-16 md:py-32">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* Content on the left */}
      <div className="lg:w-1/2">
        <h2 className="text-green-500 font-light text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase mb-6">
          The Aether Coin
        </h2>
        <p className="text-gray-300 font-light text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
          As you progress on your journey, you&apos;ll be rewarded with Clover
          Aether coins, the ultimate symbol of sustainable energy achievement.
          The Aether Coin represents the pinnacle of our collective efforts to
          create a more sustainable future, where community collaboration and
          innovation converge to make a positive impact on the environment.
        </p>
      </div>

      {/* Image on the right */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md xl:max-w-lg">
          <Image 
            src="/coin3.jpg" 
            alt="Aether Coin" 
            width={600} 
            height={400}
            className="w-full h-auto object-contain rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
    </div>
  </div>
</section>

    


        {/* Mobile App Section */}
        <section className="px-5 md:px-[5%] py-20 md:py-48">
          <div className="flex flex-col md:flex-row items-center justify-around md:gap-10">
            <div className="md:w-1/2">
              <h2 className="text-white font-extralight text-center md:text-left text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl md:leading-[5rem] lg:leading-[6rem] 2xl:leading-[8rem] uppercase">
                Stay on top of <br className="hidden lg:block" />
                your <br /> <span className="text-primary text-green-500">achievements</span>
              </h2>
            </div>
            <div className="flex justify-center lg:justify-around">
              <div className="relative">
                <div className="w-80 h-[660px] p-3 rounded-[3rem] shadow-2xl overflow-hidden">
                  <Image
                    src={"/clover-app.png"} // Replace with your actual mobile dashboard image
                    alt="Energy dashboard mobile app showing usage statistics"
                    width={350}
                    height={660}
                    className="w-full h-full rounded-3xl p-3 object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <SmartphoneCharging />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Earn Tokens Section */}
       <section className="px-5 md:px-[5%] py-16 md:py-24">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-white font-light text-center uppercase text-4xl md:text-5xl 2xl:text-6xl mb-12 md:mb-20">
      How to earn <span className="text-green-500">Clover token</span>
    </h2>
    
    <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
      {[
        {
          icon: "/token1.png",
          title: "Proving Power",
          description: "Users share their energy usage data. Coins are awarded based on the value and frequency of their data contributions."
        },
        {
          icon: "/token2.png",
          title: "Green Behaviour",
          description: "Users track and reduce energy consumption. They earn coins for eco-friendly actions and completing sustainability challenges."
        },
        {
          icon: "/token3.png",
          title: "Carbon Credits",
          description: "Carbon credits are earned based on staking duration. Users redeem these credits for various rewards and benefits"
        },
        {
          icon: "/token4.png",
          title: "Energy Incentives",
          description: "Gamification motivates customers to save energy through rewards, points, and challenges, leading to cost and environmental benefits."
        },
        {
          icon: "/token5.png",
          title: "Family Friendly",
          description: "Clover token provides a fun and interactive way for children to learn about cryptocurrency and blockchain technology."
        },
        // {
        //   icon: "/token6.png",
        //   title: "Customer Loyalty",
        //   description: "Gamified experiences boost loyalty. Customers who join energy-saving challenges and earn rewards remain loyal to the retailer."
        // },
        {
          icon: "/token7.png",
          title: "Carbon Quests and Challenges",
          description: "Gamified challenges and quests reward users for eco-friendly actions, making sustainability fun, engaging, and rewarding."
        },
        // {
        //   icon: "/token8.png",
        //   title: "Educational Opportunities",
        //   description: "Retailers can use gamification, like quizzes and interactive games, to educate customers on energy efficiency and environmental impact."
        // }
      ].map((item, index) => (
        <div 
          key={index} 
          className="group p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-[#2b2b2b] shadow-lg transition-all duration-300 hover:bg-[#383838] hover:shadow-xl hover:-translate-y-2 flex flex-col md:flex-row gap-6 items-center"
        >
          <div className="md:w-1/4 transition-transform duration-300 group-hover:scale-110">
            <div className="bg-green-500/10 p-4 rounded-full group-hover:bg-green-500/20 transition-colors duration-300">
              <Image 
                src={item.icon} 
                alt={item.title} 
                width={100} 
                height={100}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
          </div>
          <div className="md:w-3/4">
            <h4 className="text-white font-light text-xl md:text-2xl lg:text-xl 2xl:text-2xl mb-2 group-hover:text-green-400 transition-colors duration-200">
              {item.title}
            </h4>
            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-200">
              {item.description}
            </p>
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


          <section className="px-5 md:px-[2.5%]">
  <div className="relative">
    {/* Desktop Background Image */}
    <Image
      src="/new_bg.png"
      alt="Community Background"
      width={1500}
      height={500}
      className="hidden md:block w-full"
    />


    {/* Bottom-Centered Image ON Mobile (Overlayed) */}
    {/* <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
      <Image
        src="/ev-benefit2.png"
        alt="Overlay at Bottom Center"
        width={300}
        height={150}
        className="w-auto"
      />
    </div> */}

    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20">
      <h2 className="text-white font-extralight uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4">
        Join the <span className="text-primary text-green-500">community</span>
      </h2>
      <p className="text-white font-light text-lg md:text-xl 2xl:text-3xl leading-relaxed">
        Clover is a solo and multiplayer mission.<br />
        Join your community and compete to reach net zone together.
      </p>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}