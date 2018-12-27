import {
  createEle
} from '../../assets/util'

const selfInfo = function () {
  return new selfInfo.prototype.init()
}

selfInfo.prototype.init = function () {
  const section = this.section = createEle('section')

  section.classList.add('self-info')

  return this
}

selfInfo.prototype.template = function (options) {
  let templete = `
    <div class="info-container">
      <div class="info-contact">
        <div class="info-avatar-wrapper">
          <img src="${options.avatar}" alt="avatar" />
        </div>
        <div class="info-name-wrapper">
          <span>${options.name}</span>
        </div>
        <div class="info-contact-wrapper">
          <div class="info-contact-item">
            <span class="icon iconfont icon-email"></span>
            <a href="emailto:${options.contact.email}" class="contact-item-link">${options.contact.email}</a>
          </div>
          <div class="info-contact-item">
            <span class="icon iconfont icon-tel"></span>
            <a href="tel:${options.contact.phone}" class="contact-item-link">${options.contact.phone}</a>
          </div>
          <div class="info-contact-item">
            <span class="icon iconfont icon-github"></span>
            <a href="${options.contact.github}" class="contact-item-link" target="_blank">${options.contact.github}</a>
          </div>
          <div class="info-contact-item">
            <span class="icon iconfont icon-Gitlab"></span>
            <a href="${options.contact.gitlab}" class="contact-item-link" target="_blank">${options.contact.gitlab}</a>
          </div>
        </div>
      </div>

      <div class="info-msg">
        <div class="info-nickname-wrapper">
          <span class="info-name-firstname">${options.firstname}</span>
          <span class="info-name-lastname">${options.lastname}</span>
        </div>
        <div class="info-slogan-wrapper">
          <span class="info-slogan">${options.slogan}</span>
        </div>
        <div class="info-msg-wrapper">
          <div class="info-msg-item">
           <span class="msg-item-key">性别:</span>
           <span class="msg-item-value">${options.sex}</span>
          </div>
          <div class="info-msg-item">
           <span class="msg-item-key">年龄:</span>
           <span class="msg-item-value">${options.age}</span>
          </div>
          <div class="info-msg-item">
           <span class="msg-item-key">学历:</span>
           <span class="msg-item-value">${options.edu}</span>
          </div>
          <div class="info-msg-item">
           <span class="msg-item-key">年级:</span>
           <span class="msg-item-value">${options.grade}</span>
          </div>
          <div class="info-msg-item">
           <span class="msg-item-key">毕业:</span>
           <span class="msg-item-value">${options.graduate}</span>
          </div>
          <div class="info-msg-item">
           <span class="msg-item-key">就读:</span>
           <span class="msg-item-value">${options.now}</span>
          </div>
        </div>
      </div>
    </div>`

  this.section.innerHTML = templete
}

selfInfo.prototype.bindEvent = function () {}

selfInfo.prototype.render = function (options) {
  this.template(options)
  this.bindEvent()

  return this.section
}

selfInfo.prototype.init.prototype = selfInfo.prototype

export default selfInfo
