import selfInfo from './selfInfo'
import selfIntro from './selfIntro'
import selfExp from './selfExp'
import selfSkill from './selfSkill'
import selfProject from './selfProject'

import {
  byId,
  createDF
} from '../assets/util'

const rootRender = function (rootId, config) {
  let rootNode = byId(rootId)
  let fragment = createDF()
  let renderList = []

  renderComponent(selfInfo, selfIntro, selfExp, selfSkill, selfProject)

  renderList.forEach(node => {
    fragment.appendChild(node)
  })

  rootNode.appendChild(fragment)

  function renderComponent (...component) {
    component.forEach(c => {
      let renderNode = c().render({
        ...config[c.name]
      })

      renderList.push(renderNode)
    })
  }
}

export default rootRender
