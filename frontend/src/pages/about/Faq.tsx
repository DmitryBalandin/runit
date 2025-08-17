import { Accordion, Row } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';
import './Faq.module.css';

export function Faq() {
  const { t: tFAQ } = useTranslation('translation', { keyPrefix: 'faq' });
  return (
    <Row>
      <h2 className="text-center h2 fw-bold mb-0">{tFAQ('faq')}</h2>
      <Accordion className="mt-40" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{tFAQ('q0')}</Accordion.Header>
          <Accordion.Body>{tFAQ('a0')}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{tFAQ('q1')}</Accordion.Header>
          <Accordion.Body>
            {tFAQ('a11')}
            <br />
            <br />
            <Trans i18nKey="faq.a12" />
            <br />
            <br />
            <Trans i18nKey="faq.a14" />
            <br />
            <br />
            <Trans i18nKey="faq.a16" />
            <br />
            <br />
            <Trans i18nKey="faq.a18" />
            <br />
            <br />
            <Trans i18nKey="faq.a110" />
            <br />
            <br />
            <Trans i18nKey="faq.a112" />
            <br />
            <br />
            <Trans i18nKey="faq.a114" />
            <br />
            <br />
            <Trans i18nKey="faq.a116" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>{tFAQ('q2')}</Accordion.Header>
          <Accordion.Body>
            {tFAQ('a2')}
            <br />
            <br />
            <Trans i18nKey="faq.a21" />
            <br />
            <br />
            <Trans i18nKey="faq.a23" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>{tFAQ('q3')}</Accordion.Header>
          <Accordion.Body>
            {tFAQ('a3')}
            <br />
            {tFAQ('a31')}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="fw-bold mt-3 mb-2 py-1 text-secondary">
        {tFAQ('dist0')}
        <br />
        {tFAQ('dist1')}
      </div>
    </Row>
  );
}
