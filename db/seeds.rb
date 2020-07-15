Households.destroy_all
Guests.destroy_all
Orders.destroy_all
Photos.destroy_all

@alvarez=create!(surname:'Alvarez', guest_count:2, address1:'304 Park St', address2:'', city:'Clover', state:'SC', zip:29710, country:'US')
@assam=create!(surname:'Assam', guest_count:2, address1:'2 Main Rd', address2:'', city:'Glendale', state:'AZ', zip:85303, country:'US')
@beckam=create!(surname:'Beckam', guest_count:3, address1:'44 Coopers Road', address2:'Apt 204', city:'Pheonix', state:'AZ', zip:85003, country:'US')
@giordana=create!(surname:'Giordana', guest_count:3, address1:'32-32 102th St', address2:'Apt 2011', city:'Kew Gardens', state:'NY', zip:11415, country:'US')
@johnson=create!(surname:'Johnson', guest_count:4, address1:'401 Uphill Rd', address2:'', city:'San Francisco', state:'CA', zip:94102, country:'US')
@leed=create!(surname:'Leed', guest_count:2, address1:'402 Sheldon Creek', address2:'', city:'Albuquerque ', state:'NM', zip:87102, country:'US')
@liu=create!(surname:'Liu', guest_count:2, address1:'199 Radiant Creek Rd', address2:'', city:'Austin', state:'TX', zip:78748, country:'US')
@mirelda=create!(surname:'Mirelda', guest_count:2, address1:'301 Park Rd', address2:'', city:'Seattle', state:'WA', zip:98101, country:'US')
@wakamatsu=create!(surname:'Wakamatsu', guest_count:3, address1:'219 Walter Ave', address2:'Apt 2A', city:'Portland', state:'ME', zip:04101, country:'US')

Guest.create!([{first_name:'Bob', surname:'Alvarez', attending:true, under10:false, phone:5550203320, email:'hling@comcast.net', household:@alvarez.id},
{first_name:'Jasmine', surname:'Assam', attending:true, under10:false, phone:5559293933, email:'jimxugle@yahoo.com', household:@assam.id},
{first_name:'Monique', surname:'Beckam', attending:true, under10:false, phone:5550392933, email:'fatelk@msn.com', household:@beckam.id},
{first_name:'Wendy', surname:'Giordana', attending:true, under10:false, phone:5552939444, email:'starstuff@outlook.com', household:@giordana.id}
{first_name:'Mike', surname:'Johnson', attending:false, under10:false, phone:5550203320, email:'webdragon@gmail.com', household:@johnson.id},
{first_name:'Frank', surname:'Leed', attending:true, under10:false, phone:5559293933, email:'chrwin@msn.com', household:@leed.id},
{first_name:'Jason', surname:'Liu', attending:true, under10:false, phone:5550392933, email:'lamprecht@hotmail.com', household:@liu.id},
{first_name:'Jake', surname:'Mirelda', attending:false, under10:false, phone:5552939444, email:'scato@me.com', household:@mirelda.id},
{first_name:'Taka', surname:'Wakamatsu', attending:true, under10:false, phone:5550203320, email:'mcsporran@comcast.net', household:@wakamatsu.id},
{first_name:'Suzy', surname:'Alvarez', attending:true, under10:false, phone:5559293933, email:'netsfr@hotmail.com', household:@alvarez.id},
{first_name:'Shelly', surname:'Beckam', attending:true, under10:false, phone:5550392933, email:'tmccarth@sbcglobal.net', household:@beckam.id},
{first_name:'Jennifer', surname:'Giordana', attending:true, under10:false, phone:5552939444, email:'improv@comcast.net', household:@giordana.id},
{first_name:'Belen', surname:'Johnson', attending:false, under10:false, phone:5550203320, email:'hling@comcast.net', household:@johnson.id},
{first_name:'Mary', surname:'Leed', attending:true, under10:false, phone:5559293933, email:'jimxugle@yahoo.com', household:@leed.id}
{first_name:'Lila', surname:'Mirelda', attending:true, under10:false, phone:5550392933, email:'fatelk@msn.com', household:@mirelda.id},
{first_name:'Lena', surname:'Wakamatsu', attending:true, under10:false, phone:5552939444, email:'starstuff@gmail.com', household:@wakamatsu.id},
{first_name:'Tim', surname:'Beckam', attending:true, under10:true, phone:, email:'', household:@beckam.id},
{first_name:'Mary', surname:'Giordana', attending:false, under10:true, phone:, email:'', household:@giordana.id},
{first_name:'Tina', surname:'Johnson', attending:true, under10:true, phone:, email:'', household:@johnson.id},
{first_name:'Anju', surname:'Wakamatsu', attending:true, under10:true, phone:, email:'', household:@wakamatsu.id},
{first_name:'Gregory', surname:'Johnson', attending:false, under10:true, phone:, email:'', household:@johnson.id}])


