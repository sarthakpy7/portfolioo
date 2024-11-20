import style from './index.module.css'

// Components
import Section from 'components/Section'
import Container, { Row } from 'components/Container'
import ContentBlock from 'components/ContentBlock'
import ImageTrigger from 'components/ImageTrigger'
import Square from 'components/Square'
import Heading from 'components/Heading'
import { List, ListItem } from 'components/List'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

// Hooks
import { Trans, useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation('translation', { keyPrefix: 'about' })
  const intro = t('intro', { returnObjects: true }) as string[]
  const clanTitle = t('clan_title') as string
  const clan = t('clan', { returnObjects: true }) as string[]
  const methodTitle = t('method_title') as string
  const method = t('method', { returnObjects: true }) as string[]

  const dispatch = useDispatch()
  const overHandler = useCallback(() => {
    dispatch.pointer.setType('hover')
  }, [dispatch.pointer])

  const outHandler = useCallback(() => {
    dispatch.pointer.setType('default')
  }, [dispatch.pointer])

  return (
    <Section name="about" className={style.root}>
      <Container grid>
        <Row start={3} end={1}>
          <div className={style.section}>
            <ContentBlock key={intro[0]}>
              <div>
                <Trans
                  i18nKey={`about.intro.0`}
                  components={{
                    ImageVenice: <ImageTrigger name="venice" />,
                    ImageSketchin: <ImageTrigger name="sketchin" />,
                    ImageTCMGTK: <ImageTrigger name="tcmgtk" sizes={[2, 3]} />,
                  }}
                />
              </div>
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Heading key="intro-1">
            <Trans
              i18nKey="about.intro.1"
              components={{
                Square: <Square />,
                pre: <pre />,
              }}
            />
          </Heading>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock key="intro-content">
            {intro.slice(2).map((_, i) => (
              <div key={`intro-${i + 2}`}>
                <Trans
                  i18nKey={`about.intro.${i + 2}`}
                  components={{
                    ImageVenice: <ImageTrigger name="venice" />,
                    ImageSketchin: <ImageTrigger name="sketchin" />,
                    ImageTCMGTK: <ImageTrigger name="tcmgtk" sizes={[2, 3]} />,
                  }}
                />
              </div>
            ))}
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={2} end={2}>
          <div className={style.section}>
            <Heading alignRight key="clan-title">
              <>
                {clanTitle}
              </>
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={2}>
          <div className={style.columns}>
            <ContentBlock key="clan-1">
              {clan.slice(0, 2).map((_, i) => (
                <div key={`clan-${i}`}>
                  <Trans
                    i18nKey={`about.clan.${i}`}
                    components={{
                      ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
                      ImageNO1: <ImageTrigger name="no1" />,
                    }}
                  />
                </div>
              ))}
            </ContentBlock>
            <ContentBlock key="clan-2">
              {clan.slice(2).map((_, i) => (
                <div key={`clan-2-${i}`}>
                  <Trans
                    i18nKey={`about.clan.${i + 2}`}
                    components={{
                      ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
                      ImageNO2: <ImageTrigger name="no2" />,
                    }}
                  />
                </div>
              ))}
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading key="method-title">
              <Trans i18nKey="about.method_title" components={{ pre: <pre /> }} />
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock key="method-1">
            <div>
              <Trans i18nKey={`about.method.0`} />
            </div>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading key="method-2">
              <Trans i18nKey="about.method.1" />
            </Heading>
            <Heading alignRight key="method-3">
              <Trans i18nKey="about.method.2" />
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={1}>
          <div className={style.section}>
            <ContentBlock key="method-4">
              <div>
                <Trans i18nKey={`about.method.3`} />
              </div>
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={3}>
          <ContentBlock>
            <List>
              <ListItem
                end={
                  <a
                    href="https://codeforces.com/profile/Baburaoo_ganpatraoo_apte"
                    onMouseEnter={overHandler}
                    onMouseLeave={outHandler}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.link}
                  >
                    GO
                  </a>
                }
              >
                Codeforces
              </ListItem>
              <ListItem
                end={
                  <a
                    href="https://www.codechef.com/users/knapper"
                    onMouseEnter={overHandler}
                    onMouseLeave={outHandler}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.link}
                  >
                    GO
                  </a>
                }
              >
                Codechef
              </ListItem>
              <ListItem
                end={
                  <a
                    href="https://leetcode.com/u/Parashuram07/"
                    onMouseEnter={overHandler}
                    onMouseLeave={outHandler}
                    target="_blank"
                    className={style.link}
                  >
                    GO
                  </a>
                }
              >
                Leetcode
              </ListItem>
              <ListItem
                end={
                  <a
                    href="https://maang.in/profile"
                    onMouseEnter={overHandler}
                    onMouseLeave={outHandler}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.link}
                  >
                    GO
                  </a>
                }
              >
                Algozenith
              </ListItem>
            </List>
          </ContentBlock>
        </Row>
      </Container>
    </Section>
  )
}

export default About
