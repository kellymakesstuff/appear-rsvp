Household.destroy_all
Guest.destroy_all
Order.destroy_all
Photo.destroy_all

@alvarez=Household.create!(surname:'Alvarez', guest_count:2, address1:'304 Park St', address2:'', city:'Clover', state:'SC', zip:29710, country:'US')
@assam=Household.create!(surname:'Assam', guest_count:2, address1:'2 Main Rd', address2:'', city:'Glendale', state:'AZ', zip:85303, country:'US')
@beckam=Household.create!(surname:'Beckam', guest_count:3, address1:'44 Coopers Road', address2:'Apt 204', city:'Pheonix', state:'AZ', zip:85003, country:'US')
@giordana=Household.create!(surname:'Giordana', guest_count:3, address1:'32-32 102th St', address2:'Apt 2011', city:'Kew Gardens', state:'NY', zip:11415, country:'US')
@johnson=Household.create!(surname:'Johnson', guest_count:4, address1:'401 Uphill Rd', address2:'', city:'San Francisco', state:'CA', zip:94102, country:'US')
@leed=Household.create!(surname:'Leed', guest_count:2, address1:'402 Sheldon Creek', address2:'', city:'Albuquerque ', state:'NM', zip:87102, country:'US')
@liu=Household.create!(surname:'Liu', guest_count:2, address1:'199 Radiant Creek Rd', address2:'', city:'Austin', state:'TX', zip:78748, country:'US')
@mirelda=Household.create!(surname:'Mirelda', guest_count:2, address1:'301 Park Rd', address2:'', city:'Seattle', state:'WA', zip:98101, country:'US')
@wakamatsu=Household.create!(surname:'Wakamatsu', guest_count:3, address1:'219 Walter Ave', address2:'Apt 2A', city:'Portland', state:'ME', zip:04101, country:'US')

@AlvarezBob= Guest.create!(first_name:'Bob', surname:'Alvarez', attending:true, under10:false, phone:5550203320, email:'hling@comcast.net', household:@alvarez)
@AssamJasmine= Guest.create!(first_name:'Jasmine', surname:'Assam', attending:true, under10:false, phone:5559293933, email:'jimxugle@yahoo.com', household:@assam)
@BeckamMonique= Guest.create!(first_name:'Monique', surname:'Beckam', attending:true, under10:false, phone:5550392933, email:'fatelk@msn.com', household:@beckam)
@GiordanaWendy= Guest.create!(first_name:'Wendy', surname:'Giordana', attending:true, under10:false, phone:5552939444, email:'starstuff@outlook.com', household:@giordana)
@JohnsonMike= Guest.create!(first_name:'Mike', surname:'Johnson', attending:false, under10:false, phone:5550203320, email:'webdragon@gmail.com', household:@johnson)
@LeedFrank= Guest.create!(first_name:'Frank', surname:'Leed', attending:true, under10:false, phone:5559293933, email:'chrwin@msn.com', household:@leed)
@LiuJason= Guest.create!(first_name:'Jason', surname:'Liu', attending:true, under10:false, phone:5550392933, email:'lamprecht@hotmail.com', household:@liu)
@MireldaJake= Guest.create!(first_name:'Jake', surname:'Mirelda', attending:false, under10:false, phone:5552939444, email:'scato@me.com', household:@mirelda)
@WakamatsuTaka= Guest.create!(first_name:'Taka', surname:'Wakamatsu', attending:true, under10:false, phone:5550203320, email:'mcsporran@comcast.net', household:@wakamatsu)
@AlvarezSuzy= Guest.create!(first_name:'Suzy', surname:'Alvarez', attending:true, under10:false, phone:5559293933, email:'netsfr@hotmail.com', household:@alvarez)
@BeckamShelly= Guest.create!(first_name:'Shelly', surname:'Beckam', attending:true, under10:false, phone:5550392933, email:'tmccarth@sbcglobal.net', household:@beckam)
@GiordanaJennifer= Guest.create!(first_name:'Jennifer', surname:'Giordana', attending:true, under10:false, phone:5552939444, email:'improv@comcast.net', household:@giordana)
@JohnsonBelen= Guest.create!(first_name:'Belen', surname:'Johnson', attending:false, under10:false, phone:5550203320, email:'hling@comcast.net', household:@johnson)
@LeedMary= Guest.create!(first_name:'Mary', surname:'Leed', attending:true, under10:false, phone:5559293933, email:'jimxugle@yahoo.com', household:@leed)
@MireldaLila= Guest.create!(first_name:'Lila', surname:'Mirelda', attending:true, under10:false, phone:5550392933, email:'fatelk@msn.com', household:@mirelda)
@WakamatsuLena= Guest.create!(first_name:'Lena', surname:'Wakamatsu', attending:true, under10:false, phone:5552939444, email:'starstuff@gmail.com', household:@wakamatsu)
@BeckamTim= Guest.create!(first_name:'Tim', surname:'Beckam', attending:true, under10:true, phone:nil, email:'', household:@beckam)
@GiordanaMary= Guest.create!(first_name:'Mary', surname:'Giordana', attending:false, under10:true, phone:nil, email:'', household:@giordana)
@JohnsonTina= Guest.create!(first_name:'Tina', surname:'Johnson', attending:true, under10:true, phone:nil, email:'', household:@johnson)
@WakamatsuAnju= Guest.create!(first_name:'Anju', surname:'Wakamatsu', attending:true, under10:true, phone:nil, email:'', household:@wakamatsu)
@JohnsonGregory= Guest.create!(first_name:'Gregory', surname:'Johnson', attending:false, under10:true, phone:nil, email:'', household:@johnson)

Order.create!([{entree:"filet mignon", allergies:"none", guest:@AlvarezBob}, {entree:"filet mignon", allergies:"shellfish", guest:@AssamJasmine}, {entree:"filet mignon", allergies:"none", guest:@BeckamShelly}, {entree:"filet mignon", allergies:"shrimp", guest:@WakamatsuLena}, {entree:"filet mignon", allergies:"none", guest:@LeedMary}, {entree:"filet mignon", allergies:"green beans", guest:@AlvarezSuzy}, {entree:"filet mignon", allergies:"none", guest:@BeckamTim}, {entree:"filet mignon", allergies:"mushrooms", guest:@GiordanaWendy}, {entree:"filet mignon", allergies:"none", guest:@LiuJason}, {entree:"filet mignon", allergies:"none", guest:@MireldaLila}])

Photo.create!(photo_url:"testtttt", household_id:@alvarez.id)
Photo.create!(photo_url:"testtttt", household_id:@liu.id)
Photo.create!(photo_url:"testtttt", household_id:@assam.id)
Photo.create!(photo_url:"testtttt", household_id:@assam.id)
Photo.create!(photo_url:"testtttt", household_id:@beckam.id)
Photo.create!(photo_url:"testtttt", household_id:@leed.id)
Photo.create!(photo_url:"testtttt", household_id:@wakamatsu.id)

