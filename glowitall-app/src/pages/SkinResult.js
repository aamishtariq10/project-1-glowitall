import React, { useState, useEffect } from 'react';

function SkincareRecommendation() {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [skinConcern, setSkinConcern] = useState('');
  const [skinType, setSkinType] = useState('');
  const [sensitiveSkin, setSensitiveSkin] = useState('');
  const [skinSensitivity, setSkinSensitivity] = useState('');
  const [pimplesFrequency, setPimplesFrequency] = useState('');
  const [makeupUsage, setMakeupUsage] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [sunExposure, setSunExposure] = useState('');
  const [productType, setProductType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      try {
        const response = await fetch('http://localhost:5000/api/recommendation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            gender,
            age,
            skinConcern,
            skinType,
            sensitiveSkin,
            skinSensitivity,
            pimplesFrequency,
            makeupUsage,
            waterIntake,
            sunExposure,
            productType,
            priceRange,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setRecommendation(data);
        } else {
          console.error('Failed to get recommendation');
        }
      } catch (error) {
        console.error('Failed to connect to the server');
      }
    }
  };

  const handleGetRecommendation = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/recommendation', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setRecommendation(data);
      } else {
        console.error('Failed to get recommendation');
      }
    } catch (error) {
      console.error('Failed to connect to the server');
    }
  };

  useEffect(() => {
    setIsFormValid(
      gender &&
      age &&
      skinConcern &&
      skinType &&
      sensitiveSkin &&
      skinSensitivity &&
      pimplesFrequency &&
      makeupUsage &&
      waterIntake &&
      sunExposure &&
      productType &&
      priceRange
    );
  }, [
    gender,
    age,
    skinConcern,
    skinType,
    sensitiveSkin,
    skinSensitivity,
    pimplesFrequency,
    makeupUsage,
    waterIntake,
    sunExposure,
    productType,
    priceRange,
  ]);

  return (
    <>
    <div className='container-xl'>
      <div className='row'>
        <div className='col-12'>
              <div className="strip ">
                <h1 className="Start-title">BEAUTY STUDIO</h1>
              </div>
        </div>
      </div>
    </div>

    <br />


    <div className='skincare-recommendation-container'>
      
      <div>
        <h1 className='skincare-recommendation-title mt-4'>SKINCARE RECOMMENDATION QUIZ</h1>
        <form onSubmit={handleSubmit} className='skincare-recommendation-form mt-4'>
          <label>
            What is your Gender?
            <div className='radio-group'>
              <label>
                <input
                  type='radio'
                  name='gender'
                  value='FEMALE'
                  checked={gender === 'FEMALE'}
                  onChange={(e) => setGender(e.target.value)}
                />
                 
                FEMALE
              </label>
              <label>
                <input
                  type='radio'
                  name='gender'
                  value='MALE'
                  checked={gender === 'MALE'}
                  onChange={(e) => setGender(e.target.value)}
                />
                MALE
              </label>
            </div>
          </label>

<label>
  What is your Age?
  <div className='radio-group'>
    <label>
      <input
        type='radio'
        name='age'
        value='24 or Under'
        checked={age === '24 or Under'}
        onChange={(e) => setAge(e.target.value)}
      />
     24 or Under
    </label>
    <label>
      <input
        type='radio'
        name='age'
        value='25-32'
        checked={age === '25-32'}
        onChange={(e) => setAge(e.target.value)}
      />
     25-32
    </label>
    <label>
      <input
        type='radio'
        name='age'
        value='45-54'
        checked={age === '45-54'}
        onChange={(e) => setAge(e.target.value)}
      />
     45-54
    </label>
    <label>
      <input
        type='radio'
        name='age'
        value='55 or above'
        checked={age === '55 or above'}
        onChange={(e) => setAge(e.target.value)}
      />
     55 or above
    </label>
  </div>
</label>

<label>
  What is your Skin Concern?
  <div className='radio-group'>
  <img src="Images/hyperpigmentation.jpg" alt='picture' />
    <label>
      <input
        type='radio'
        name='skinConcern'
        value='Acne'
        checked={skinConcern === 'Acne'}
        onChange={(e) => setSkinConcern(e.target.value)}
      />
      Acne
    </label>
    <label>
    <img src="https://img.freepik.com/free-photo/selfcare-cosmetology-beauty-concept-sensual-attractive-relaxed-naked-redhead-young-woman-freckled-cheeks-closed-eyes-gently-touching-cheek-enjoying-clean-pure-skin-condition-applying-daily-creme_176420-34646.jpg?size=626&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' />
      <input
        type='radio'
        name='skinConcern'
        value='Pores'
        checked={skinConcern === 'Pores'}
        onChange={(e) => setSkinConcern(e.target.value)}
      />
      Pores
    </label>
    <label>
    <img src="https://static.toiimg.com/thumb/msid-67074139,imgsize-127575,width-800,height-600,resizemode-75/67074139.jpg" alt='picture'/>
      <input
        type='radio'
        name='skinConcern'
        value='Signs of Aging'
        checked={skinConcern === 'Signs of Aging'}
        onChange={(e) => setSkinConcern(e.target.value)}
      />
      Signs of Aging
    </label>
    <label>
    <img src="Images/darkspots.png" alt='picture' />
      <input
        type='radio'
        name='skinConcern'
        value='Dark Spots'
        checked={skinConcern === 'Dark Spots'}
        onChange={(e) => setSkinConcern(e.target.value)}
      />
      Dark Spots
    </label>
    <label>
    <img src="Images/wrnikles.png" alt='picture'/>
      <input
        type='radio'
        name='skinConcern'
        value='Finelines & Wrinkles'
        checked={skinConcern === ' Finelines & Wrinkles'}
        onChange={(e) => setSkinConcern(e.target.value)}
      />
      Finelines & Wrinkles
    </label>
    <label>
    <img src="Images/dullness.png" alt='picture'/>
      <input
        type='radio'
        name='skinConcern'
        value=' Dullness'
        checked={skinConcern === ' Dullness'}
        onChange={(e) => setSkinConcern(e.target.value)}
      />
       Dullness
    </label>
    <label>
    <img src="Images/dark circles.jpeg" alt='picture' />
      <input
        type='radio'
        name='skinConcern'
        value=' Darkcircles'
        checked={skinConcern === ' Darkcircles'}
        onChange={(e) => setSkinConcern(e.target.value)}
      />
       Darkcircles
    </label>
    <label>
      <input
        type='radio'
        name='skinConcern'
        value=' Hyperpigmentation'
        checked={skinConcern === 'Hyperpigmentation'}
        onChange={(e) => setSkinConcern(e.target.value)}
      />
      Hyperpigmentation
    </label>
  </div>
</label>

<label>
  What is your Skin Type?
  <div className='radio-group'>
    <label>
    <img src="https://img.freepik.com/free-icon/fog_318-468040.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' />
      <input
        type='radio'
        name='skinType'
        value='Oily'
        checked={skinType === 'Oily'}
        onChange={(e) => setSkinType(e.target.value)}
      />
      Oily
    </label>
    <label>
    <img src="https://img.freepik.com/free-icon/makeup_318-741375.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture'/>
      <input
        type='radio'
        name='skinType'
        value='Dry'
        checked={skinType === 'Dry'}
        onChange={(e) => setSkinType(e.target.value)}
      />
      Dry
    </label>
    <label>
    <img src="https://img.freepik.com/free-icon/drops_318-222742.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture'/>
      <input
        type='radio'
        name='skinType'
        value='Combination'
        checked={skinType === 'Combination'}
        onChange={(e) => setSkinType(e.target.value)}
      />
      Combination
    </label>
    <label>
      
    <img src="https://img.freepik.com/free-icon/moon_318-744273.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' />
      <input
        type='radio'
        name='skinType'
        value='Normal'
        checked={skinType === 'Normal'}
        onChange={(e) => setSkinType(e.target.value)}
      />
      Normal
    </label>
  </div>
</label>

<label>
  Is your skin sensitive?
  <div className='radio-group'>
    <label>
      <input
        type='radio'
        name='sensitiveSkin'
        value='Yes'
        checked={sensitiveSkin === 'Yes'}
        onChange={(e) => setSensitiveSkin(e.target.value)}
      />
      Yes
    </label>
    <label>
      <input
        type='radio'
        name='sensitiveSkin'
        value='No'
        checked={sensitiveSkin === 'No'}
        onChange={(e) => setSensitiveSkin(e.target.value)}
      />
      No
    </label>
  </div>
</label>

<label>
  How often is your skin sensitive?
  <div className='radio-group'>
    <label>
    <img src="https://img.freepik.com/free-icon/pulse_318-583977.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' />
      <input
        type='radio'
        name='skinSensitivity'
        value='Rarely'
        checked={skinSensitivity === 'Rarely'}
        onChange={(e) => setSkinSensitivity(e.target.value)}
      />
     Rarely
    </label>
    <label>
    <img src="https://img.freepik.com/free-icon/heart-beat_318-242813.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' />

      <input
        type='radio'
        name='skinSensitivity'
        value='Sometimes'
        checked={skinSensitivity === 'Sometimes'}
        onChange={(e) => setSkinSensitivity(e.target.value)}
      />
      Sometimes
    </label>
    <label>
    <img src="https://img.freepik.com/free-icon/rate_318-167109.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
      <input
        type='radio'
        name='skinSensitivity'
        value='All the time'
        checked={skinSensitivity === 'All the time'}
        onChange={(e) => setSkinSensitivity(e.target.value)}
      />
      All the time
    </label>
  </div>
</label>

<label>
How often do you get pimples?
  <div className='radio-group'>
    <label>
    <img src="https://img.freepik.com/free-icon/timetable_318-812577.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' />
      <input
        type='radio'
        name='pimplesFrequency'
        value='Rarely'
        checked={pimplesFrequency === 'Rarely'}
        onChange={(e) => setPimplesFrequency(e.target.value)}
      />
      Rarely
    </label>
    <label>
    <img src="https://img.freepik.com/free-icon/calendar_318-263873.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture'/>
      <input
        type='radio'
        name='pimplesFrequency'
        value='Occasionally'
        checked={pimplesFrequency === 'Occasionally'}
        onChange={(e) => setPimplesFrequency(e.target.value)}
      />
      Occasionally
    </label>
    <label>
    <img src="https://img.freepik.com/free-icon/calendar_318-449334.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' />
      <input
        type='radio'
        name='pimplesFrequency'
        value='Frequently'
        checked={pimplesFrequency === 'Frequently'}
        onChange={(e) => setPimplesFrequency(e.target.value)}
      />
      Frequently
    </label>
    <label>
    <img src="https://img.freepik.com/free-icon/open_318-204973.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' />
      <input
        type='radio'
        name='pimplesFrequency'
        value='Always'
        checked={pimplesFrequency === 'Always'}
        onChange={(e) => setPimplesFrequency(e.target.value)}
      />
      Always
    </label>
  </div>
</label>

<label>
How much makeup do you use on a daily basis?
  <div className='radio-group'>
    <label>
      <input
        type='radio'
        name='makeupUsage'
        value='Normal'
        checked={makeupUsage === 'Normal'}
        onChange={(e) => setMakeupUsage(e.target.value)}
      />
      Normal
    </label>
    <label>
      <input
        type='radio'
        name='makeupUsage'
        value=' A little'
        checked={makeupUsage === ' A little'}
        onChange={(e) => setMakeupUsage(e.target.value)}
      />
      A little
    </label>
    <label>
      <input
        type='radio'
        name='makeupUsage'
        value='A decent amount'
        checked={makeupUsage === 'A decent amount'}
        onChange={(e) => setMakeupUsage(e.target.value)}
      />
      A decent amount
    </label>
    <label>
      <input
        type='radio'
        name='makeupUsage'
        value='Full Coverage'
        checked={makeupUsage === 'Full Coverage'}
        onChange={(e) => setMakeupUsage(e.target.value)}
      />
      Full Coverage
    </label>
  </div>
</label>

<label>
How much water do you take everyday?
  <div className='radio-group'>
    <label>
      <input
        type='radio'
        name='waterIntake'
        value='Less than 1 liter'
        checked={waterIntake === 'Less than 1 liter'}
        onChange={(e) => setWaterIntake(e.target.value)}
      />
      Less than 1 liter
    </label>
    <label>
      <input
        type='radio'
        name='waterIntake'
        value='1-2 liters'
        checked={waterIntake === '1-2 liters'}
        onChange={(e) => setWaterIntake(e.target.value)}
      />
      1-2 liters
    </label>
    <label>
      <input
        type='radio'
        name='waterIntake'
        value='2-3 liters'
        checked={waterIntake === '2-3 liters'}
        onChange={(e) => setWaterIntake(e.target.value)}
      />
      2-3 liters
    </label>
    <label>
      <input
        type='radio'
        name='waterIntake'
        value='More than 3 liters'
        checked={waterIntake === 'More than 3 liters'}
        onChange={(e) => setWaterIntake(e.target.value)}
      />
      More than 3 liters
    </label>
  </div>
</label>

<label>
How much time do you spend under direct sun exposure per day?
  <div className='radio-group'>
    <label>
      <input
        type='radio'
        name='sunExposure'
        value='High'
        checked={sunExposure === 'High'}
        onChange={(e) => setSunExposure(e.target.value)}
      />
      High
    </label>
    <label>
      <input
        type='radio'
        name='sunExposure'
        value='Medium'
        checked={sunExposure === 'Medium'}
        onChange={(e) => setSunExposure(e.target.value)}
      />
      Medium
    </label>
    <label>
      <input
        type='radio'
        name='sunExposure'
        value='Low'
        checked={sunExposure === 'Low'}
        onChange={(e) => setSunExposure(e.target.value)}
      />
      Low
    </label>
    <label>
      <input
        type='radio'
        name='sunExposure'
        value='None'
        checked={sunExposure === 'None'}
        onChange={(e) => setSunExposure(e.target.value)}
      />
      None
    </label>
  </div>
</label>

<label>
What are you looking for?
  <div className='radio-group'>
    <label>
    <img src="https://img.freepik.com/free-photo/flat-lay-body-cream-plain-background_23-2148241867.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=sph" alt='picture' />
      <input
        type='radio'
        name='productType'
        value=' Moisturizer'
        checked={productType === ' Moisturizer'}
        onChange={(e) => setProductType(e.target.value)}
      />
      Moisturizer
    </label>
    <label>
    
      <input
        type='radio'
        name='productType'
        value=' Cleanser'
        checked={productType === ' Cleanser'}
        onChange={(e) => setProductType(e.target.value)}
      />
      Cleanser
    </label>
    <label>
    <img src="https://img.freepik.com/free-photo/skin-oil-droppers-assortment-with-wooden-pieces_23-2148761386.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=sph" alt='picture' />
      <input
        type='radio'
        name='productType'
        value='Serum'
        checked={productType === 'Serum'}
        onChange={(e) => setProductType(e.target.value)}
      />
      Serum
    </label>
    <label>
    <img src="https://img.freepik.com/free-photo/still-life-cosmetic-products_23-2149163123.jpg?size=626&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture'/>
      <input
        type='radio'
        name='productType'
        value='Eye Cream'
        checked={productType === 'Eye Cream'}
        onChange={(e) => setProductType(e.target.value)}
      />
      Eye Cream
    </label>
    <label>
    <img src="https://img.freepik.com/free-photo/white-sunscreen-cream-coming-out-orange-bottle-against-orange-backdrop_23-2148154032.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture'/>
      <input
        type='radio'
        name='productType'
        value='Sunblock'
        checked={productType === ' Sunblock'}
        onChange={(e) => setProductType(e.target.value)}
      />
      Sunblock
    </label>
  </div>
</label>

<label>
What is the price range you require for the products?
  <div className='radio-group'>
    <label>
      <input
        type='radio'
        name='priceRange'
        value='COST-EFFECTIVE'
        checked={priceRange === 'COST-EFFECTIVE'}
        onChange={(e) => setPriceRange(e.target.value)}
      />
      COST-EFFECTIVE
    </label>
    <label>
      <input
        type='radio'
        name='priceRange'
        value=' Sunblock'
        checked={priceRange === ' Sunblock'}
        onChange={(e) => setPriceRange(e.target.value)}
      />
      HIGHEND
    </label>
  </div>
</label>

<button  onClick={handleGetRecommendation} type='submit' disabled={!isFormValid} className='skincare-recommendation-submit-btn'>
            Get Recommendation
          </button>
        </form>
        

        {/* Render the recommendation if available */}
        {recommendation && (
          <div className='container' style={{marginLeft:"220px"}}>
            <h2>Product Recommendation</h2>
            <img style={{width:"200px",height:"200px"}} src={recommendation.imageUrl} alt={recommendation.name} />
            <h3>{recommendation.brand}</h3>
            <h4>{recommendation.name}</h4>
            <p>{recommendation.description}</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default SkincareRecommendation;