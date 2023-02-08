import { Row, Col, Input } from "antd";

const SignInComponents = () => {
  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div>My Books</div>
            <div>Please Note Your Opinion</div>
            <div />
            <div>
              Email
              <span> *</span>
              <div>
                <Input placeholder="Email" autoComplete="email" name="email" />
              </div>
            </div>
            <div>
              Password
              <span> *</span>
              <div>
                <Input
                  type="password"
                  autoComplete="current-password"
                  name="password"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SignInComponents;
