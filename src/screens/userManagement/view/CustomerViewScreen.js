import { useState, useEffect } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SellerLogout } from "../../../actions/SellerActions";
import MainScreen from "../../../components/MainScreen";
import "./ViewScreen.css";

const SellerViewScreen = () => {
	const [name, setName] = useState("");
	const [dob, setDob] = useState("");
	const [nic, setNic] = useState("");
	const [gender, setGender] = useState("");
	const [telephone, setTelephone] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [bmi, setBmi] = useState("");
	const [regDate, setRegDate] = useState("");

	const Seller_Login = useSelector((state) => state.Seller_Login);
	const { SellerInfo } = Seller_Login;

	useEffect(
		(e) => {
			setName(SellerInfo.name);
			setDob(SellerInfo.dob);
			setNic(SellerInfo.nic);
			setGender(SellerInfo.gender);
			setTelephone(SellerInfo.telephone);
			setAddress(SellerInfo.address);
			setEmail(SellerInfo.email);
			setHeight(SellerInfo.height);
			setWeight(SellerInfo.weight);
			setBmi(SellerInfo.bmi);
			setPic(SellerInfo.pic);
			setRegDate(SellerInfo.regDate);
		},
		[SellerInfo]
	);

	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(SellerLogout());
		//history.push("/");
	};

	if (SellerInfo) {
		return (
			<div className="profileViewBg">
				<br></br>
				<MainScreen title="VIEW PROFILE - Seller">
					<Button
						variant="success"
						style={{
							float: "left",
							marginTop: 5,
							fontSize: 15,
							marginLeft: 10,
						}}
						href="/Seller"
					>
						{" "}
						Back to Dashboard
					</Button>
					<Button
						variant="danger"
						onClick={logoutHandler}
						style={{
							float: "right",
							marginTop: 5,
							fontSize: 15,
							marginRight: 10,
						}}
					>
						Logout
					</Button>
					<br></br>
					<br></br>
					<br></br>
					<Card
						className="profileCont"
						style={{
							borderRadius: 45,
							borderWidth: 2.0,
							marginTop: 20,
							paddingInline: 10,
							paddingLeft: 25,
							paddingRight: 25,
							background: "rgba(231, 238, 238, 0.8)",
						}}
					>
						<br></br>
						<div className="loginContainer">
							<Row className="SellerProfileContainer">
								<Col md={6}>
									<Form>
										<Form.Group controlId="SellerViewName">
											<Form.Label>Name</Form.Label>
											<Form.Control
												type="name"
												value={name}
												placeholder="Enter name"
												onChange={(e) => setName(e.target.value)}
												readOnly
											/>
										</Form.Group>
										<Form.Group controlId="SellerViewDob">
											<Form.Label>Date Of Birth</Form.Label>
											<Form.Control type="date" value={dob} onChange={(e) => setDob(e.target.value)} readOnly />
										</Form.Group>

										<Form.Group controlId="SellerViewFormBasicGender">
											<Form.Label>Gender</Form.Label>
											<Form.Control
												type="text"
												value={gender}
												placeholder="Enter NIC"
												onChange={(e) => setGender(e.target.value)}
												readOnly
											/>
										</Form.Group>
										<Form.Group controlId="SellerViewFormBasicNic">
											<Form.Label>NIC Number</Form.Label>
											<Form.Control
												type="text"
												value={nic}
												placeholder="Enter NIC"
												onChange={(e) => setNic(e.target.value)}
												readOnly
											/>
										</Form.Group>
										<Form.Group controlId="SellerViewFormBasicTelephone">
											<Form.Label>Telephone</Form.Label>
											<Form.Control
												type="text"
												value={telephone}
												placeholder="Enter Telephone Number"
												onChange={(e) => setTelephone(e.target.value)}
												readOnly
												maxLength={10}
											/>
										</Form.Group>
										<Form.Group controlId="SellerFormBasicAddress">
											<Form.Label>Address</Form.Label>
											<Form.Control
												type="textArea"
												value={address}
												placeholder="Enter Address"
												onChange={(e) => setAddress(e.target.value)}
												readOnly
											/>
										</Form.Group>
										<Form.Group controlId="doctorFormBasicEmail">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												value={email}
												placeholder="Enter Email Address"
												onChange={(e) => setEmail(e.target.value)}
												readOnly
											/>
										</Form.Group>

										<Form.Group controlId="SellervFormBasicHeight">
											<Form.Label>Height</Form.Label>
											<Form.Control
												type="text"
												value={height}
												placeholder="Enter Height In Meters"
												onChange={(e) => setHeight(e.target.value)}
												readOnly
											/>
										</Form.Group>
										<Form.Group controlId="SellerFormBasicWeight">
											<Form.Label>Weight</Form.Label>
											<Form.Control
												type="text"
												value={weight}
												placeholder="Enter Weight In Kilograms"
												onChange={(e) => setWeight(e.target.value)}
												readOnly
											/>
										</Form.Group>
										<Form.Group controlId="SellerFormBasicWeight">
											<Form.Label>BMI</Form.Label>
											<Form.Control
												type="text"
												value={bmi}
												placeholder="Enter Weight In Kilograms"
												onChange={(e) => setBmi(e.target.value)}
												readOnly
											/>
										</Form.Group>

										<Form.Group controlId="trainerViewRegDate">
											<Form.Label>Registration Date</Form.Label>
											<Form.Control type="date" value={regDate} onChange={(e) => setRegDate(e.target.value)} readOnly />
										</Form.Group>
									</Form>
								</Col>
								<Col
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<img
										src={pic}
										alt={name}
										className="profilePic"
										style={{
											boxShadow: "7px 7px 20px ",
											borderColor: "black",
											borderRadius: 250,
											background: "white",
											width: "300px",
											height: "300px",
										}}
									/>
								</Col>
							</Row>
							<br></br>
						</div>
					</Card>
					<br></br>
				</MainScreen>
				<br></br>
			</div>
		);
	} else {
		return (
			<div className="denied">
				<MainScreen />
				<br></br>
			</div>
		);
	}
};

export default SellerViewScreen;
