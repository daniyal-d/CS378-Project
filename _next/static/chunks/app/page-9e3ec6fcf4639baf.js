(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{148:e=>{e.exports={container:"StartRecipe_container__UhTC5",title:"StartRecipe_title__Nq0JY",imageWrapper:"StartRecipe_imageWrapper__8tPm7",image:"StartRecipe_image__rNr9Z",rating:"StartRecipe_rating__h_n3M",time:"StartRecipe_time__Vt0Wv",difficulty:"StartRecipe_difficulty__MUCDh",buttons:"StartRecipe_buttons__eitmN",ingredientsButton:"StartRecipe_ingredientsButton__yfdm2",startButton:"StartRecipe_startButton__kjYNU",resumeButton:"StartRecipe_resumeButton__xdQZe",header:"StartRecipe_header__8yhhC",backButton:"StartRecipe_backButton__rkysP"}},3464:e=>{e.exports={modalOverlay:"AddRecipeModal_modalOverlay__fT6RR",modalContent:"AddRecipeModal_modalContent__9TdGS",closeButton:"AddRecipeModal_closeButton__xnrwR",spinnerOverlay:"AddRecipeModal_spinnerOverlay__LsTkv",spinner:"AddRecipeModal_spinner__yM5JR"}},4410:(e,t,i)=>{Promise.resolve().then(i.bind(i,4721))},4721:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>B});var n=i(5155),a=i(2115),s=i(7430),r=i.n(s),o=i(9911);let l=e=>{let{stepNumber:t,totalSteps:i,title:s,description:l,imageUrl:c,timerDuration:d=0,demonstration:u,helpfulTip:p,onNext:m,onPrevious:h,allStepTitles:g=[],onNavigateHome:_,onStepSelect:b}=e,[f,v]=(0,a.useState)(d),[x,y]=(0,a.useState)(d>0),[j,S]=(0,a.useState)(!1),[k,N]=(0,a.useState)(!1),[w,C]=(0,a.useState)(!1),[B,R]=(0,a.useState)(()=>{let e=localStorage.getItem("isFavorite");return!!e&&JSON.parse(e)}),I=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e;return x&&f>0?e=setInterval(()=>{v(e=>e-1)},1e3):0===f&&x&&y(!1),()=>clearInterval(e)},[x,f]),(0,a.useEffect)(()=>{N(!1)},[t]),(0,a.useEffect)(()=>{let e=e=>{I.current&&!I.current.contains(e.target)&&S(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);let L=()=>{N(e=>!e)},T=e=>{b&&b(e),S(!1)},q=()=>{let e=!B;R(e),localStorage.setItem("isFavorite",JSON.stringify(e))};return(0,n.jsxs)("div",{className:r().recipeStepContainer,children:[(0,n.jsxs)("div",{className:r().header,children:[(0,n.jsxs)("div",{className:r().menuContainer,ref:I,children:[(0,n.jsx)("button",{className:r().menuButton,onClick:()=>{S(!j)},children:(0,n.jsxs)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",className:r().menuIcon,children:[(0,n.jsx)("rect",{y:"4",width:"24",height:"2",rx:"1"}),(0,n.jsx)("rect",{y:"11",width:"24",height:"2",rx:"1"}),(0,n.jsx)("rect",{y:"18",width:"24",height:"2",rx:"1"})]})}),j&&(0,n.jsx)("div",{className:r().menuDropdown,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{onClick:_,children:"Home"}),g.map((e,i)=>(0,n.jsxs)("li",{onClick:()=>T(i+1),className:t===i+1?r().activeStep:"",children:[i+1,". ",e]},i))]})})]}),(0,n.jsxs)("div",{className:r().stepIndicator,children:[t," / ",i]}),(0,n.jsx)("button",{className:r().settingsButton,onClick:()=>C(!0),children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",className:r().settingsIcon,children:(0,n.jsx)("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})})})]}),(0,n.jsx)("div",{className:r().cardContainer,children:(0,n.jsxs)("div",{className:"".concat(r().cardWrapper," ").concat(k?r().flipped:""),children:[(0,n.jsxs)("div",{className:"".concat(r().cardFace," ").concat(r().cardFront),onClick:L,children:[(0,n.jsx)("h2",{className:r().title,children:s}),(0,n.jsx)("div",{className:r().imageContainer,children:(0,n.jsx)("img",{src:c,alt:s,className:r().image})}),(0,n.jsx)("p",{className:r().description,children:l}),f>0&&(0,n.jsxs)("div",{className:r().timerContainer,children:[(0,n.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",className:r().timerIcon,children:(0,n.jsx)("path",{d:"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"})}),(0,n.jsx)("div",{className:r().timerText,children:(e=>{if(e<=0)return null;let t=Math.floor(e/60);return"".concat(t," min ").concat(e%60," sec left")})(f)})]})]}),(0,n.jsxs)("div",{className:"".concat(r().cardFace," ").concat(r().cardBack),onClick:L,children:[(0,n.jsx)("h2",{className:r().title,children:"Demo & Tips"}),(0,n.jsxs)("div",{className:r().demoSection,children:[(0,n.jsx)("h3",{children:"Demonstration"}),(0,n.jsx)("p",{children:u})]}),(0,n.jsxs)("div",{className:r().tipsSection,children:[(0,n.jsx)("h3",{children:"Helpful Tips"}),(0,n.jsx)("p",{children:p})]})]})]})}),(0,n.jsxs)("div",{className:r().navigation,children:[(0,n.jsx)("button",{className:r().navButton,onClick:h,disabled:1===t,children:"←"}),(0,n.jsx)("div",{className:r().flipText,children:"Flip card to see demo & tips"}),(0,n.jsx)("button",{className:r().navButton,onClick:m,disabled:t===i,children:"→"})]}),w&&(0,n.jsx)("div",{className:r().modalOverlay,onClick:()=>C(!1),children:(0,n.jsxs)("div",{className:r().modalContent,onClick:e=>e.stopPropagation(),children:[(0,n.jsxs)("div",{className:r().settingsRow,children:[(0,n.jsx)("span",{style:{color:"#000"},children:"Add recipe to favorites"}),B?(0,n.jsx)(o.gt3,{onClick:q,style:{cursor:"pointer",color:"yellow"},size:24}):(0,n.jsx)(o.wei,{onClick:q,style:{cursor:"pointer",color:"#333"},size:24})]}),(0,n.jsx)("button",{onClick:()=>C(!1),children:"Close"})]})})]})};var c=i(5346),d=i.n(c);let u=JSON.parse('{"recipes":[{"name":"Spaghetti Carbonara","ingredients":[{"item":"Spaghetti","quantity":"2 cups","substitutions":[{"substitution":"Gluten-free spaghetti"}]},{"item":"Egg yolks","quantity":"3 tbsp","substitutions":[{"substitution":"Silken tofu"}]},{"item":"Pancetta","quantity":"1/2 cup","substitutions":[{"substitution":"Turkey bacon"},{"substitution":"Mushrooms"}]},{"item":"Parmesan cheese","quantity":"1/2 cup","substitutions":[{"substitution":"Nutritional yeast"}]},{"item":"Black pepper","quantity":"1 tsp"},{"item":"Salt","quantity":"to taste"},{"item":"Olive oil","quantity":"1 tbsp"}],"steps":[{"stepNumber":1,"totalSteps":6,"title":"Boil pasta","description":"Boil salted water and cook spaghetti until al dente, reserving \xbd cup pasta water.","imageUrl":"./images/spaghetti_carbonara/1.jpg","timerDuration":10,"demonstration":"Watch the water bubble in a fervent dance as you steadily lower the spaghetti for even cooking.","helpfulTip":"Salt your water generously; testing the pasta a minute early ensures perfect al dente texture."},{"stepNumber":2,"totalSteps":6,"title":"Fry pancetta","description":"Fry pancetta in olive oil until crispy.","imageUrl":"./images/spaghetti_carbonara/2.jpg","timerDuration":5,"demonstration":"Observe the pancetta as it sizzles and transforms, the fat rendering into a golden, crisp symphony.","helpfulTip":"Keep the heat moderate to avoid burning, achieving crisp perfection without bitterness."},{"stepNumber":3,"totalSteps":6,"title":"Whisk egg mixture","description":"Whisk egg yolks with grated Parmesan and black pepper.","imageUrl":"./images/spaghetti_carbonara/3.jpg","timerDuration":3,"demonstration":"Whisk vigorously until your mixture becomes a smooth, golden cascade reminiscent of a sunrise.","helpfulTip":"Gently beat to prevent froth—aim for a creamy, uniform blend that will effortlessly coat your pasta."},{"stepNumber":4,"totalSteps":6,"title":"Combine pasta and pancetta","description":"Combine drained pasta with pancetta, remove from heat, and mix in egg mixture.","imageUrl":"./images/spaghetti_carbonara/4.jpg","timerDuration":5,"demonstration":"Fold the ingredients with a delicate, measured touch—a culinary dance that marries texture and flavor.","helpfulTip":"Remove from heat before adding the eggs to prevent scrambling, using pasta water to fine-tune the sauce’s consistency."},{"stepNumber":5,"totalSteps":6,"title":"Add pasta water","description":"Add pasta water gradually to create a creamy sauce.","imageUrl":"./images/spaghetti_carbonara/5.jpg","timerDuration":3,"demonstration":"Drizzle the starchy water slowly, watching the sauce thicken like a painter blending vibrant hues.","helpfulTip":"Add in small increments—the starch in the water is your ally in achieving a silky, emulsified sauce."},{"stepNumber":6,"totalSteps":6,"title":"Serve","description":"Serve immediately with extra cheese and black pepper.","imageUrl":"./images/spaghetti_carbonara/6.jpg","timerDuration":0,"demonstration":"Plate your dish with a flourish, a final act of artistry accented by a sprinkle of extra cheese and pepper.","helpfulTip":"Enjoy while hot; the sauce sets quickly once it cools, so serve immediately for the best texture."}]},{"name":"Chocolate Chip Cookies","ingredients":[{"item":"All-purpose flour","quantity":"2 cups","substitutions":[{"substitution":"Almond flour"},{"substitution":"Gluten-free flour"}]},{"item":"Butter","quantity":"1 cup","substitutions":[{"substitution":"Coconut oil"},{"substitution":"Margarine"}]},{"item":"Brown sugar","quantity":"\xbe cup","substitutions":[{"substitution":"Coconut sugar"}]},{"item":"White sugar","quantity":"\xbe cup","substitutions":[{"substitution":"Honey (1/2 cup)"},{"substitution":"Maple syrup (1/2 cup)"}]},{"item":"Eggs","quantity":"2"},{"item":"Vanilla extract","quantity":"1 tsp"},{"item":"Baking soda","quantity":"1 tsp"},{"item":"Salt","quantity":"\xbd tsp"},{"item":"Chocolate chips","quantity":"1 cup","substitutions":[{"substitution":"Carob chips"},{"substitution":"Dark chocolate chunks"}]}],"steps":[{"stepNumber":1,"totalSteps":7,"title":"Preheat oven","description":"Preheat oven to 350\xb0F (175\xb0C) and line a baking sheet with parchment paper.","imageUrl":"./images/chocolate_chip_cookies/1.jpg","timerDuration":0,"demonstration":"Set the stage as the oven warms to a perfect 350\xb0F, an essential prelude to your baking performance.","helpfulTip":"Ensure a consistent oven temperature by verifying with an oven thermometer if available."},{"stepNumber":2,"totalSteps":7,"title":"Cream butter and sugars","description":"Cream butter and sugars together until fluffy.","imageUrl":"./images/chocolate_chip_cookies/2.jpg","timerDuration":3,"demonstration":"Blend the butter and sugars into a light, airy mixture—a sweet alchemy that paves the way for tender cookies.","helpfulTip":"Proper creaming introduces air, which is key for a soft texture; take your time."},{"stepNumber":3,"totalSteps":7,"title":"Beat in eggs and vanilla","description":"Beat in eggs and vanilla extract.","imageUrl":"./images/chocolate_chip_cookies/3.jpg","timerDuration":3,"demonstration":"Gently fold in eggs and vanilla, blending them into the mixture until a silky consistency prevails.","helpfulTip":"Room temperature eggs mix more evenly, ensuring a harmonious batter."},{"stepNumber":4,"totalSteps":7,"title":"Mix dry ingredients","description":"Mix flour, baking soda, and salt in a separate bowl, then gradually combine with wet ingredients.","imageUrl":"./images/chocolate_chip_cookies/4.jpg","timerDuration":5,"demonstration":"Whisk the dry ingredients with a steady rhythm, creating a foundation as dependable as a well-kept secret.","helpfulTip":"Sift your dry mix to avoid lumps and ensure even distribution when combined with the wet ingredients."},{"stepNumber":5,"totalSteps":7,"title":"Fold in chocolate chips","description":"Fold in chocolate chips.","imageUrl":"./images/chocolate_chip_cookies/5.jpg","timerDuration":2,"demonstration":"Gently incorporate the chocolate chips, scattering them like treasures through the dough.","helpfulTip":"Avoid overmixing to preserve the tender, chewy texture of your cookies."},{"stepNumber":6,"totalSteps":7,"title":"Bake cookies","description":"Drop spoonfuls of dough onto the baking sheet and bake for 10-12 minutes until golden brown.","imageUrl":"./images/chocolate_chip_cookies/6.jpg","timerDuration":12,"demonstration":"Watch the dough transform in the oven’s warm embrace, edges crisping while centers remain soft and inviting.","helpfulTip":"Check a minute early to avoid overbaking—cookies continue to firm up once removed from the oven."},{"stepNumber":7,"totalSteps":7,"title":"Cool cookies","description":"Cool on a wire rack before serving.","imageUrl":"./images/chocolate_chip_cookies/7.jpg","timerDuration":5,"demonstration":"Let the cookies rest on a rack, their enticing aroma lingering like whispered secrets of sweetness.","helpfulTip":"Cooling prevents residual heat from compromising texture; let them set to perfection on a wire rack."}]},{"name":"Hummingbird Muffins","ingredients":[{"item":"All-purpose flour","quantity":"2 cups","substitutions":[{"substitution":"Whole wheat flour"},{"substitution":"Gluten-free flour"}]},{"item":"Baking soda","quantity":"1 tsp"},{"item":"Salt","quantity":"\xbd tsp"},{"item":"Cinnamon","quantity":"1 tsp"},{"item":"Brown sugar","quantity":"\xbe cup","substitutions":[{"substitution":"Coconut sugar"}]},{"item":"Eggs","quantity":"2","substitutions":[{"substitution":"Flax eggs"}]},{"item":"Vegetable oil","quantity":"\xbd cup","substitutions":[{"substitution":"Coconut oil"}]},{"item":"Vanilla extract","quantity":"1 tsp"},{"item":"Mashed bananas","quantity":"1 cup"},{"item":"Crushed pineapple","quantity":"\xbd cup","substitutions":[{"substitution":"Applesauce"}]},{"item":"Chopped pecans","quantity":"\xbd cup","substitutions":[{"substitution":"Walnuts"}]}],"steps":[{"stepNumber":1,"totalSteps":9,"title":"Preheat oven","description":"Preheat oven to 350\xb0F (175\xb0C) and line a muffin tin with paper liners.","imageUrl":"./images/hummingbird_muffins/1.jpg","timerDuration":0,"demonstration":"Set the canvas ablaze with preheated warmth—a necessary prelude to muffin magic.","helpfulTip":"A well-preheated oven and properly lined tin ensure even rising and easy release."},{"stepNumber":2,"totalSteps":9,"title":"Mix dry ingredients","description":"In a bowl, whisk together flour, baking soda, salt, and cinnamon.","imageUrl":"./images/hummingbird_muffins/2.jpg","timerDuration":3,"demonstration":"Let the dry ingredients mingle in a rhythmic swirl, creating a foundation of flavor and aroma.","helpfulTip":"Sifting these ingredients can boost aeration, ensuring a light and even muffin crumb."},{"stepNumber":3,"totalSteps":9,"title":"Mix wet ingredients","description":"In a separate bowl, whisk together brown sugar, eggs, oil, and vanilla until well combined.","imageUrl":"./images/hummingbird_muffins/3.jpg","timerDuration":5,"demonstration":"Blend the wet ingredients until they sing in harmony—a smooth, sweet overture to your batter.","helpfulTip":"Mix until just combined to keep the muffins tender; overmixing may result in toughness."},{"stepNumber":4,"totalSteps":9,"title":"Add bananas and pineapple","description":"Stir in mashed bananas and crushed pineapple.","imageUrl":"./images/hummingbird_muffins/4.jpg","timerDuration":3,"demonstration":"Fold in the tropical burst of bananas and pineapple—a colorful medley that brings vibrancy to every bite.","helpfulTip":"Mix gently to maintain fruit texture and ensure even flavor distribution."},{"stepNumber":5,"totalSteps":9,"title":"Combine dry and wet ingredients","description":"Gradually mix in dry ingredients until just combined.","imageUrl":"./images/hummingbird_muffins/5.jpg","timerDuration":3,"demonstration":"Merge the two worlds with a delicate stir, uniting them like kindred spirits on a single journey.","helpfulTip":"Stir only until no dry patches remain—overmixing can cause a dense, heavy muffin."},{"stepNumber":6,"totalSteps":9,"title":"Fold in nuts","description":"Fold in chopped pecans.","imageUrl":"./images/hummingbird_muffins/6.jpg","timerDuration":2,"demonstration":"Gently sprinkle the chopped pecans, allowing crunchy accents to dot your batter like autumn leaves.","helpfulTip":"Fold with care to retain the muffins’ airy structure while adding a delightful crunch."},{"stepNumber":7,"totalSteps":9,"title":"Scoop batter","description":"Scoop batter into muffin cups, filling each about \xbe full.","imageUrl":"./images/hummingbird_muffins/7.jpg","timerDuration":0,"demonstration":"Spoon the luscious batter into each cup with precision, creating uniform little works of edible art.","helpfulTip":"Fill each cup about 75% full to allow the muffins room to rise without spilling over."},{"stepNumber":8,"totalSteps":9,"title":"Bake muffins","description":"Bake for 18-22 minutes or until a toothpick inserted in the center comes out clean.","imageUrl":"./images/hummingbird_muffins/8.jpg","timerDuration":22,"demonstration":"Watch as your muffins undergo a golden transformation, emerging soft yet structured from the oven’s embrace.","helpfulTip":"Test with a toothpick towards the end of baking; avoid opening the oven frequently to maintain temperature."},{"stepNumber":9,"totalSteps":9,"title":"Cool muffins","description":"Let cool in the pan for 5 minutes, then transfer to a wire rack to cool completely.","imageUrl":"./images/hummingbird_muffins/9.jpg","timerDuration":5,"demonstration":"Allow the muffins to cool, their inviting aroma lingering like a gentle lullaby on the senses.","helpfulTip":"Cooling on a rack prevents moisture buildup, ensuring your muffins retain their delicate texture."}]}]}'),p=(e,t)=>{let i=e.recipes.find(e=>e.name===t);return i?i.ingredients.map(e=>({id:e.item.toLowerCase().replace(/\s/g,"-"),name:e.item,amount:e.quantity?"(".concat(e.quantity,")"):"",selected:!1,alternatives:e.substitutions?e.substitutions.map(t=>({id:t.substitution.toLowerCase().replace(/\s/g,"-"),name:t.substitution,amount:e.quantity?"(".concat(e.quantity,")"):"",selected:!1})):[],showAlternatives:!1})):[]},m=e=>{let{onContinueToInstructions:t,onBack:i,selected:s}=e,[r,l]=(0,a.useState)([]),[c,m]=(0,a.useState)(!1),[h,g]=(0,a.useState)(()=>{let e=localStorage.getItem("isFavorite");return!!e&&JSON.parse(e)});(0,a.useEffect)(()=>{l(p(u,s))},[s]);let _=e=>{l(t=>t.map(t=>{var i;return t.id===e?{...t,selected:!t.selected,alternatives:null===(i=t.alternatives)||void 0===i?void 0:i.map(e=>({...e,selected:!1}))}:t}))},b=(e,t)=>{l(i=>i.map(i=>{var n;return i.id===e?{...i,selected:!1,alternatives:null===(n=i.alternatives)||void 0===n?void 0:n.map(e=>({...e,selected:e.id===t&&!e.selected}))}:i}))},f=e=>{l(t=>t.map(t=>t.id===e?{...t,showAlternatives:!t.showAlternatives}:t))},v=()=>{let e=!h;g(e),localStorage.setItem("isFavorite",JSON.stringify(e))};return(0,n.jsxs)("div",{className:d().container,children:[(0,n.jsxs)("div",{className:d().header,children:[(0,n.jsxs)("button",{className:d().backButton,onClick:i,children:["← Back to ",s]}),(0,n.jsx)("button",{className:d().settingsButton,onClick:()=>m(!0),children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",className:d().settingsIcon,children:(0,n.jsx)("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})})})]}),(0,n.jsx)("h1",{className:d().title,children:"Ingredients"}),(0,n.jsx)("div",{className:d().ingredientsList,children:r.map(e=>(0,n.jsxs)("div",{className:d().ingredientWrapper,children:[(0,n.jsxs)("div",{className:d().ingredientItem,children:[(0,n.jsxs)("label",{className:d().ingredientLabel,children:[(0,n.jsx)("input",{type:"checkbox",checked:e.selected,onChange:()=>_(e.id),className:d().checkbox}),(0,n.jsxs)("span",{className:d().ingredientText,children:[e.name," ",e.amount]})]}),e.alternatives&&e.alternatives.length>0&&(0,n.jsx)("button",{className:"".concat(d().dropdownButton," ").concat(e.showAlternatives?d().dropdownOpen:d().dropdownClosed),onClick:()=>f(e.id),children:"►"})]}),e.showAlternatives&&e.alternatives&&(0,n.jsx)("div",{className:d().alternativesList,children:e.alternatives.map(t=>(0,n.jsx)("div",{className:d().alternativeItem,children:(0,n.jsxs)("label",{className:d().alternativeLabel,children:[(0,n.jsx)("input",{type:"checkbox",checked:t.selected,onChange:()=>b(e.id,t.id),className:d().checkbox}),(0,n.jsxs)("span",{className:d().alternativeText,children:[t.name," ",t.amount]})]})},t.id))})]},e.id))}),(0,n.jsx)("div",{className:d().footer,children:(0,n.jsx)("button",{className:d().continueButton,onClick:t,children:"Continue to Instructions →"})}),c&&(0,n.jsx)("div",{className:d().modalOverlay,onClick:()=>m(!1),children:(0,n.jsxs)("div",{className:d().modalContent,onClick:e=>e.stopPropagation(),children:[(0,n.jsxs)("div",{className:d().settingsRow,children:[(0,n.jsx)("span",{style:{color:"#000"},children:"Add recipe to favorites"}),h?(0,n.jsx)(o.gt3,{onClick:v,style:{cursor:"pointer",color:"yellow"},size:24}):(0,n.jsx)(o.wei,{onClick:v,style:{cursor:"pointer",color:"#333"},size:24})]}),(0,n.jsx)("button",{onClick:()=>m(!1),children:"Close"})]})})]})};var h=i(148),g=i.n(h),_=i(6766);let b=e=>{let{onStart:t,onShowIngredients:i,hasStarted:a=!1,onBack:s,selected:r}=e,l=r.toLowerCase().replace(/\s+/g,"_");return(0,n.jsxs)("div",{className:g().container,children:[(0,n.jsx)("div",{className:g().header,children:(0,n.jsx)("button",{className:g().backButton,onClick:s,children:"← Back to all recipes"})}),(0,n.jsx)("h1",{className:g().title,children:r}),(0,n.jsx)("div",{className:g().imageWrapper,children:(0,n.jsx)(_.default,{src:"/images/".concat(l,"/cover_photo.jpg"),alt:r,width:200,height:200,className:g().image})}),(0,n.jsx)("div",{className:g().rating,children:"⭐⭐⭐⭐☆"}),(0,n.jsx)("p",{className:g().time,children:"Time: 20 min"}),(0,n.jsx)("p",{className:g().difficulty,children:"Difficulty: Beginner"}),(0,n.jsxs)("div",{className:g().buttons,children:[(0,n.jsx)("button",{className:g().ingredientsButton,onClick:i,children:"Ingredients"}),a?(0,n.jsxs)("button",{className:g().resumeButton,onClick:t,children:["Resume ",(0,n.jsx)(o.EEI,{})]}):(0,n.jsxs)("button",{className:g().startButton,onClick:t,children:["Start ",(0,n.jsx)(o.gSK,{})]})]})]})};var f=i(7602),v=i.n(f),x=i(3464),y=i.n(x);function j(e){let{onClose:t}=e,[i,s]=(0,a.useState)(""),[r,o]=(0,a.useState)(null),l=async e=>{e.preventDefault(),o(null)};return(0,n.jsx)("div",{className:y().modalOverlay,children:(0,n.jsxs)("div",{className:y().modalContent,children:[(0,n.jsx)("button",{className:y().closeButton,onClick:t,children:"X"}),(0,n.jsx)("h2",{children:"Upload Custom Recipe"}),(0,n.jsxs)("form",{onSubmit:l,children:[(0,n.jsx)("input",{type:"url",placeholder:"Paste your recipe URL here",value:i,onChange:e=>s(e.target.value),required:!0}),(0,n.jsx)("button",{type:"submit",children:"Submit"})]}),r&&(0,n.jsx)("p",{children:r})]})})}let S=e=>e.recipes.map(e=>({recipeName:e.name}));function k(e){let{onSelectRecipe:t}=e,i=S(u),[s,r]=(0,a.useState)(!1);return(0,n.jsxs)("div",{className:v().container,children:[(0,n.jsx)("div",{className:v().header,children:(0,n.jsx)("h1",{className:v().title,children:"AL DENTE"})}),(0,n.jsxs)("div",{className:v().uploadPill,onClick:()=>r(!0),children:[(0,n.jsx)("span",{children:"Upload custom recipe"}),(0,n.jsx)("span",{className:v().arrow,children:"↑"})]}),s&&(0,n.jsx)(j,{onClose:()=>r(!1)}),(0,n.jsx)("div",{className:v().content,children:i.map(e=>{let i=e.recipeName.toLowerCase().replace(/\s+/g,"_");return(0,n.jsxs)("button",{className:v().button,onClick:()=>t(e.recipeName),children:[(0,n.jsx)("div",{className:v().imageWrapper,children:(0,n.jsx)("img",{src:"/images/".concat(i,"/cover_photo.jpg"),alt:e.recipeName,className:v().recipeImage})}),(0,n.jsx)("span",{children:e.recipeName})]},e.recipeName)})})]})}var N=i(6191),w=i.n(N);let C=e=>{let t=u.recipes.find(t=>t.name===e);return t?t.steps:[]};function B(){let[e,t]=(0,a.useState)("landing"),[i,s]=(0,a.useState)(0),[r,o]=(0,a.useState)(!1),[c,d]=(0,a.useState)(""),u=C(c),p=u.length,h=u[i],g=()=>{t("steps"),o(!0)};return(0,n.jsxs)("div",{className:w().container,children:["landing"===e&&(0,n.jsx)(k,{onSelectRecipe:e=>{d(e),o(!1),s(0),t("start")}}),"start"===e&&(0,n.jsx)(b,{onStart:g,onShowIngredients:()=>t("ingredients"),onBack:()=>t("landing"),hasStarted:r,selected:c}),"ingredients"===e&&(0,n.jsx)(m,{onContinueToInstructions:g,onBack:()=>t("start"),selected:c}),"steps"===e&&p>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:w().title,children:"Hummingbird Muffins"}),(0,n.jsx)("div",{className:w().stepWrapper,children:(0,n.jsx)(l,{stepNumber:i+1,totalSteps:p,title:h.title,description:h.description,imageUrl:h.imageUrl,timerDuration:h.timerDuration,demonstration:h.demonstration,helpfulTip:h.helpfulTip,onNext:()=>{i<p-1&&s(i+1)},onPrevious:()=>{i>0&&s(i-1)},onNavigateHome:()=>{t("start")},onStepSelect:e=>{s(e-1)},allStepTitles:u.map(e=>e.title)})})]})]})}},5346:e=>{e.exports={container:"Ingredients_container__82FG3",header:"Ingredients_header__ZIkgC",backButton:"Ingredients_backButton__n8m_s",settingsButton:"Ingredients_settingsButton__tIK2Y",settingsIcon:"Ingredients_settingsIcon__UdoJ_",title:"Ingredients_title__dO3nC",ingredientsList:"Ingredients_ingredientsList__v39jy",ingredientWrapper:"Ingredients_ingredientWrapper__qF7wf",ingredientItem:"Ingredients_ingredientItem__Y_Wx6",ingredientLabel:"Ingredients_ingredientLabel__BYeZl",checkbox:"Ingredients_checkbox__nsoVg",ingredientText:"Ingredients_ingredientText__0M_wH",dropdownButton:"Ingredients_dropdownButton__FYAq0",dropdownClosed:"Ingredients_dropdownClosed__5RM_k",dropdownOpen:"Ingredients_dropdownOpen__XdAjC",alternativesList:"Ingredients_alternativesList__pY4ZK",alternativeItem:"Ingredients_alternativeItem__0wSls",alternativeLabel:"Ingredients_alternativeLabel__LNqiQ",alternativeText:"Ingredients_alternativeText__HNLzY",footer:"Ingredients_footer__FAkdy",continueButton:"Ingredients_continueButton__VTRnr",modalOverlay:"Ingredients_modalOverlay__L1isV",modalContent:"Ingredients_modalContent__iBJLz",settingsRow:"Ingredients_settingsRow__bLUlO"}},6191:e=>{e.exports={container:"page_container__IibMw",title:"page_title__AnOgy",stepWrapper:"page_stepWrapper__Shrpq"}},7430:e=>{e.exports={recipeStepContainer:"RecipeStep_recipeStepContainer__sAOKr",header:"RecipeStep_header__5CfVC",menuButton:"RecipeStep_menuButton__Cc_Sf",settingsButton:"RecipeStep_settingsButton__m8aug",menuIcon:"RecipeStep_menuIcon__1p0hR",settingsIcon:"RecipeStep_settingsIcon__1pKwY",stepIndicator:"RecipeStep_stepIndicator__p6S9H",cardContainer:"RecipeStep_cardContainer__O3e4F",cardWrapper:"RecipeStep_cardWrapper__LNKSB",cardFace:"RecipeStep_cardFace__GW02Q",flipped:"RecipeStep_flipped__ax4Uq",cardFront:"RecipeStep_cardFront__gK4OC",cardBack:"RecipeStep_cardBack__GWWOJ",title:"RecipeStep_title___1X_d",imageContainer:"RecipeStep_imageContainer__Hq_Ia",image:"RecipeStep_image__PeqHj",description:"RecipeStep_description__H42BV",timerContainer:"RecipeStep_timerContainer__RWhE_",timerIcon:"RecipeStep_timerIcon__hOw_h",timerText:"RecipeStep_timerText__2fxl6",navigation:"RecipeStep_navigation__ktGQ0",navButton:"RecipeStep_navButton__8hVBE",flipText:"RecipeStep_flipText__TvPpQ",menuContainer:"RecipeStep_menuContainer__5UP4N",menuDropdown:"RecipeStep_menuDropdown__PhJ3G",demoSection:"RecipeStep_demoSection__rGfqm",tipsSection:"RecipeStep_tipsSection___ZmeZ",backButton:"RecipeStep_backButton__lkHJg",modalOverlay:"RecipeStep_modalOverlay__q6L5L",modalContent:"RecipeStep_modalContent__8q0sq",settingsRow:"RecipeStep_settingsRow__dC1bJ"}},7602:e=>{e.exports={container:"LandingPage_container__9Lv3G",header:"LandingPage_header__UyTDH",title:"LandingPage_title__NaqMY",content:"LandingPage_content__UqCUq",button:"LandingPage_button__MtTjG",imageWrapper:"LandingPage_imageWrapper__ncBI4",recipeImage:"LandingPage_recipeImage__6oXKP",uploadPill:"LandingPage_uploadPill__Kjn1a"}}},e=>{var t=t=>e(e.s=t);e.O(0,[112,711,751,441,684,358],()=>t(4410)),_N_E=e.O()}]);