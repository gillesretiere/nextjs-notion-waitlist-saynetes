import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}
// logo_hmrt_transparent.svg
export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Merci de votre intérêt pour les saynètes, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://hammer-marteau.com/assets/hmrt_logo_red.png`}
          width="220"
          height="220"
          alt="Notion Waitlist Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Merci d'avoir répondu à notre invitation! Je suis heureux de vous inviter à découvrir les Saynètes "Le diabète".
        </Text>
        <Text style={paragraph}>
          Pour tous renseignements complémentaires concernant les saynètes, veuillez contacter en envoyant un mail à l'adresse suivante {" "}
          <a href="mailto:gilles.retiere@gmail.com" style={link}>
            cet email {""}
          </a>
          — Nous sommes à votre disposition!
        </Text>
        <Text style={paragraph}>
          Pour découvrir les saynètes, veuillez cliquer sur ce lien :{" "}
          <a href="https://saynetes.fr" style={link}>
            Vers les Saynètes
          </a>
        </Text>
        <Text style={signOff}>
          Cordialement,
          <br />
          Gilles
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Vous avez reçu cet email car vous avez répondu à l'invitation d'un précédent email.
          Si vous estimez qu'il s'agit d'une erreur, veuillez ignorer ce message.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default NotionWaitlistEmail;

const main = {
  background: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#F7FF9B",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
