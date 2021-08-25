const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = async (email, name) => {
  try {
  	await sgMail.send({
  		to: email,
  		from: 'mahim@yopmail.com',
  		subject: 'Thanks for joining in.',
  		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  	})
  } catch (error) {
  	console.log(error.message)
  }
}

const sendCancelationEmail = async (email, name) => {
	try {
		await sgMail.send({
			to: email,
			from: 'mahim@yopmail.com',
			subject: 'Account cancelation',
			text: `Goodbye, ${name}. Hope to see you soon.`
		})
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
}

// const msg = {
//   to: 'moinulhossainmahim@gmail.com',
//   from: 'mahim@yopmail.com',
//   subject: 'This is my first mail',
//   text: 'Hello dude! How are you?',
// }

// sgMail.send(msg).then(() => {
// 	console.log('Email sent')
// }).catch((error) => {
// 	console.log(error.response.body.errors[0].message)
// })