import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <>
        <main className="App-header">
          <h1>Login to Book My Show</h1>
          <section className="mw-500 text-center px-3">
            <Form layout="vertical">
              <Form.Item
                label="Name"
                htmlFor="name"
                name="name"
                className="d-block"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input id="name" type="text" placeholder="Enter Your Name" />
              </Form.Item>
              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input id="email" type="text" placeholder="Enter Your Email" />
              </Form.Item>
              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </Form.Item>
              <Form.Item className="d-block">
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div>
              <p>
                {" "}
                Already a User ? <Link to="/login">Register</Link>
              </p>
            </div>
          </section>
        </main>
      </>
    </>
  );
}

export default Register;
