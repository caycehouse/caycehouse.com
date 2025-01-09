import { FaEnvelope, FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"
import { Nav } from "react-bootstrap"

export default function SocialNav() {
  return (
    <>
      <Nav className="justify-content-center mt-5" activeKey="/home">
        <IconContext.Provider value={{ size: "4em" }}>
          <Nav.Item>
            <Nav.Link href="https://github.com/caycehouse" target="_blank">
              <FaGithub />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="mailto:cayce@caycehouse.com" target="_blank">
              <FaEnvelope />
            </Nav.Link>
          </Nav.Item>
        </IconContext.Provider>
      </Nav>
    </>
  )
}
