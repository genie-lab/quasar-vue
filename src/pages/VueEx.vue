<template class="q-pa-md q-gutter-md">
  <div class="text-h3">템플릿 문법</div>
  <q-card-section>Message: {{ msg }}</q-card-section>
  <q-separator />
  <q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
  <q-card-section
    >Using v-html directive: <span v-html="rawHtml"></span
  ></q-card-section>
  <q-separator />
  <q-card-section>
    <q-btn
      unelevated
      color="primary"
      type="a"
      target="_blank"
      v-bind:id="linkId"
      v-bind:href="link.to"
      :title="link.title"
      :label="link.label"
    ></q-btn>
  </q-card-section>
  <q-separator />
  <q-card-section>
    <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
  </q-card-section>
  <q-separator />
  <q-card-section>
    {{ number + 1 }}
  </q-card-section>
  <q-separator />
  <q-card-section>{{ ok ? "YES" : "NO" }}</q-card-section>
  <q-separator />
  <q-card-section>
    {{ message.split("").reverse().join("") }}
  </q-card-section>
  <q-separator />
  <q-card-section :id="`list-${id}`"> list-{{ id }} </q-card-section>
  <q-separator />
  <q-card-section class="text-h6">
    {{ toTitleDate }}
  </q-card-section>
  <q-separator />
  <q-card-section v-if="seen"> Now you see me </q-card-section>
  <!--
  v-bind:href="url" == :href="url"
  v-on:click="doSomething" == @click="doSomething"
  v-bind:[attributeName]="url" == :[attributeName]="url"
  attributeName예를 들어 명시적으로 구성 요소를 소유하고 있는 경우 이 경우 "href"와 합니다 v-bind:href.
  v-on:[eventName]="doSomething" == @[eventName]="doSomething"
  이 예에서 eventName의 값이 이면 "focus"와 v-on:[eventName]보호됩니다 v-on:focus.
  @submit.prevent="onSubmit"
  예를 들어 트리거된 사건을 부호화한 클립문 .prevent에 기록합니다 .v-onevent.preventDefault()
  -->
  <q-separator />
  <q-card-section v-if="!seen"> Now you see me </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-card-section v-if="type == 'A'"> A </q-card-section>
  <q-card-section v-else-if="type === 'B'"> B </q-card-section>
  <q-card-section v-else-if="type === 'C'"> C </q-card-section>
  <q-card-section v-else> Not A/B/C </q-card-section>
  <q-separator />

  <div class="text-h3">반응형 기초</div>
  <q-card-section
    >책을 가지고 있다 computed: {{ publishedBooksMessage }}</q-card-section
  >
  <q-separator />
  <q-card-section
    >책을 가지고 있다 methods: {{ calculateBooksMessage() }}</q-card-section
  >
  <q-separator />
  <q-card-section class="text-h2"
    >현재시간 : {{ calculateDate() }}</q-card-section
  >
  <q-separator />
  <q-card-section>{{ fullName }}</q-card-section>
  <q-separator />
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-if="ok" dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      v-show="ok"
      dark
      bordered
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
  <!--v-if"실제" 조건부 렌더링은 조건부 블록 내부의 이벤트 리스너와 자식 구성 요소가 토글 중에 적절하게 파괴되고 다시 생성되도록 하기 때문에 "실제" 조건부 렌더링입니다.
    v-ifis also lazy : 초기 렌더링에서 조건이 거짓이면 아무 작업도 수행하지 않습니다. 조건 블록은 조건이 처음으로 참이 될 때까지 렌더링되지 않습니다.
    이에 비해 v-show훨씬 간단합니다. 요소는 CSS 기반 토글을 사용하여 초기 조건에 관계없이 항상 렌더링됩니다.
    일반적으로 v-if토글 비용이 높고 v-show초기 렌더링 비용이 더 높습니다. 따라서 v-show무언가를 매우 자주 토글해야 하는 경우 선호하고 v-if조건이 런타임 시 변경될 가능성이 없는 경우 선호합니다.-->
  <q-separator />

  <div class="q-pa-md">
    <q-list v-for="(item, idx) in listItems" :key="idx" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ idx + 1 }}. {{ item.message }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md">
    <q-list v-for="(item, index) in listItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section
          >{{ parentMessage }} - {{ index + 1 }} -
          {{ item.message }}</q-item-section
        >
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md">
    <q-list
      v-for="({ message }, index) in listItems"
      :key="index"
      bordered
      separator
    >
      <q-item clickable v-ripple>
        <q-item-section>{{ message }} - {{ index + 1 }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />

  <div class="q-pa-md">
    <q-list
      v-for="(item, index) in tupleListItems"
      :key="index"
      bordered
      separator
    >
      <q-item clickable v-ripple>
        <q-item-section
          v-for="(childItem, index) in item.children"
          :key="index"
        >
          <q-item-section>{{ item.message }} - {{ childItem }}</q-item-section>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />

  <div class="q-pa-md">
    <q-list
      v-for="({ message }, index) of listItems"
      :key="index"
      bordered
      separator
    >
      <q-item clickable v-ripple>
        <q-item-section>{{ message }} - {{ index }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md">
    <q-list
      v-for="(value, key, index) in myObject"
      :key="index"
      bordered
      separator
    >
      <q-item clickable v-ripple>
        <q-item-section
          >{{ index + 1 }}. {{ key }} : {{ value }}</q-item-section
        >
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-list v-for="n in 10" :key="n" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ n }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md items-start">
    <my-component
      v-for="(item, index) in listItems"
      :key="index"
      :item="item"
      :index="index"
    ></my-component>
  </div>
  <q-separator />
  <!--어레이 교체-->
  <q-card-section>{{ filterItems }}</q-card-section>
  <q-list v-for="n in evenNumbers" :key="n" bordered separator>
    <q-item clickable v-ripple>
      <q-item-section>{{ n }}</q-item-section>
    </q-item>
  </q-list>
  <q-list v-for="(numbers, index) in sets" :key="index" bordered separator>
    <q-item v-for="n in even(numbers)" :key="n" clickable v-ripple>
      <q-item-section
        ><q-item-label class="text-h6 text-weight-bolder text-center">{{
          n
        }}</q-item-label></q-item-section
      >
    </q-item>
  </q-list>
  <q-card-section>{{ reverseNumbers }}</q-card-section>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-btn @click="count++" label="카운트" color="primary"></q-btn>
    <q-card-section>Count is: {{ count }}</q-card-section>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-btn @click="increment" label="메소드 호출" color="primary"></q-btn>
    <q-card-section>methodCount is: {{ methodCount }}</q-card-section>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-btn
      @click="mutateDeeply"
      label="깊은 반응형 체크"
      color="primary"
    ></q-btn>
    <q-card-section>obj.nested.count is: {{ obj.nested.count }}</q-card-section>
    <q-card-section>obj.arr is: {{ obj.arr }}</q-card-section>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-btn
      @click="debouncedClick"
      label="debouncedClick 체크"
      color="primary"
    ></q-btn>
    <q-card-section>obj.nested.count is: {{ obj.nested.count }}</q-card-section>
    <q-card-section>obj.arr is: {{ obj.arr }}</q-card-section>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <!--https://quasar.dev/quasar-plugins/notify#introduction -->
    <q-btn
      @click="greet"
      label="greet"
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
    <!--https://quasar.dev/quasar-plugins/dialog#introduction-->
    <q-btn label="Alert" color="primary" @click="alert" class="q-ma-sm" />
    <q-btn label="Confirm" color="primary" @click="confirm" class="q-ma-sm" />
    <q-btn label="Prompt" color="primary" @click="prompt" class="q-ma-sm" />
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-btn
      @click="say('안녕')"
      label="안녕이라고 말하기"
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
    <q-btn
      @click="say('잘가')"
      label="잘가라고 말하기"
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-btn
      @click="warn('아직 양식을 제출할 수 없습니다.', $event)"
      label="아직 양식을 제출할 수 없습니다."
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
    <q-btn
      @click="(event) => warn('아직 양식을 제출할 수 없습니다1.', event)"
      label="아직 양식을 제출할 수 없습니다1"
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <!--https://vuejs.org/guide/essentials/event-handling.html#event-modifiers-->
    <!--이벤트 수정자 https://hj-tilblog.tistory.com/85-->
    <q-btn label="stop" color="primary" @click.stop="doThis" class="q-ma-sm" />
    <q-form
      label="prevent"
      color="primary"
      @submit.prevent="doThis"
      class="q-ma-sm"
    >
      <q-input v-model="name" />
      <q-btn label="submit" type="submit"></q-btn>
    </q-form>
    <q-btn
      label="stopPrevent"
      color="primary"
      @click.stop.prevent="doThis()"
      class="q-ma-sm"
    />
    <q-btn
      label="submitPrevent"
      color="primary"
      @submit.prevent
      class="q-ma-sm"
    />
    <q-form label="prevent" color="primary" @submit.prevent class="q-ma-sm">
      <q-input v-model="name" />
      <q-btn label="submit" type="submit"></q-btn>
    </q-form>

    <q-btn label="self" color="primary" @click.self="doThis" class="q-ma-sm" />
    <q-btn
      label="capture"
      color="primary"
      @click.capture="doThis"
      class="q-ma-sm"
    />
    <q-btn label="once" color="primary" @click.once="doThis" class="q-ma-sm" />
    <q-btn
      label="passive"
      color="primary"
      @scroll.passive="doThis"
      class="q-ma-sm"
    />
    <!--키 수정자 -->
    <q-btn
      label="enter"
      color="primary"
      @keyup.enter="doThis"
      class="q-ma-sm"
    />
    <q-btn
      label="page-down"
      color="primary"
      @keyup.page-down="doThis"
      class="q-ma-sm"
    />
    <q-btn label="tab" color="primary" @keyup.tab="doThis" class="q-ma-sm" />
    <q-btn
      label="delete"
      color="primary"
      @keyup.delete="doThis"
      class="q-ma-sm"
    />
    <q-btn
      label="space"
      color="primary"
      @keyup.space="doThis"
      class="q-ma-sm"
    />
    <q-btn label="up" color="primary" @keyup.up="doThis" class="q-ma-sm" />
    <q-btn label="down" color="primary" @keyup.down="doThis" class="q-ma-sm" />
    <q-btn label="left" color="primary" @keyup.left="doThis" class="q-ma-sm" />
    <q-btn
      label="right"
      color="primary"
      @keyup.right="doThis"
      class="q-ma-sm"
    />
    <!--시스템수정자 키 -->
    <q-btn label="ctrl" color="primary" @keyup.ctrl="doThis" class="q-ma-sm" />
    <q-btn
      label="altEnter"
      color="primary"
      @keyup.alt.enter="doThis"
      class="q-ma-sm"
    />
    <q-btn
      label="shift"
      color="primary"
      @keyup.shift="doThis"
      class="q-ma-sm"
    />
    <q-btn label="meta" color="primary" @keyup.meta="doThis" class="q-ma-sm" />
  </div>
  <q-separator />
  <!--https://vuejs.org/guide/essentials/forms.html-->
  <!--https://quasar.dev/vue-components/input-->
  <!--input  https://quasar.dev/vue-components/input-->
  <!--https://vuejs.org/guide/essentials/forms.html#lazy-->
  <div class="q-pa-md row items-start">
    <q-card-section class="col-4">
      메세지 입력하기 : {{ text }}
      <q-input
        outlined
        bottom-slots
        v-model.lazy="text"
        label="메세지 입력하기"
        counter
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint> Field hint </template>
      </q-input>

      <span>여러 줄 메세지:</span>
      <p style="white-space: pre-line">{{ textArea }}</p>
      <div class="q-pa-md" style="max-width: 300px">
        <q-input v-model="textArea" filled type="textarea" />
      </div>
    </q-card-section>
    <!--select  https://quasar.dev/vue-components/select-->
    <q-card-section class="col-4">
      <q-select
        filled
        bottom-slots
        v-model="model"
        :options="options"
        label="Label"
        counter
        dense
        :options-dense="false"
      >
        <template v-slot:prepend>
          <q-icon name="place" @click.stop.prevent />
        </template>
        <template v-slot:append>
          <q-icon
            name="close"
            @click.stop.prevent="model = ''"
            class="cursor-pointer"
          />
        </template>

        <template v-slot:hint> Field hint </template>
      </q-select>
    </q-card-section>
    <!---multiple-->
    <q-select
      filled
      v-model="model2"
      multiple
      :options="options"
      counter
      max-values="2"
      hint="Max 2 selections"
      style="width: 250px"
    />
    <!---object-->
    <q-select
      filled
      v-model="model2"
      multiple
      :options="options"
      counter
      max-values="2"
      hint="Max 2 selections"
      style="width: 250px"
    />
    <!--file https://quasar.dev/vue-components/file-picker-->
    <q-card-section class="col-4">
      <q-file outlined v-model="model" dense>
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
    </q-card-section>
    <q-card-section class="col-4 q-mt-md" style="max-width: 400px">
      <!--https://vuejs.org/guide/essentials/forms.html#number-->
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model.trim="nick"
          label="Your nick *"
          hint="nick and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model.number="age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </q-card-section>
    <!--checkbox https://quasar.dev/vue-components/radio-->
    <q-card-section class="col-4 q-mt-md">
      <q-radio v-model="color" val="teal" label="Teal" color="teal" />
      <q-radio v-model="color" val="orange" label="Orange" color="orange" />
      <q-radio v-model="color" val="red" label="Red" color="red" />
      <q-card-section>
        {{ color }}
      </q-card-section>
    </q-card-section>
    <q-card-section class="col-4 q-mt-md">
      <q-radio v-model="color1" :val="first" label="Teal" color="teal" />
      <q-radio v-model="color1" :val="second" label="Orange" color="orange" />
      <q-card-section>
        {{ color1 }}
      </q-card-section>
    </q-card-section>

    <!--toggle https://quasar.dev/vue-components/toggle-->
    <q-card-section class="col-4 q-mt-md">
      <q-toggle
        v-model="value"
        color="green"
        label="On Right"
        true-value="네"
        false-value="아니오"
      />
      {{ value }}
    </q-card-section>
    <q-card-section class="col-4 q-mt-md">
      <q-toggle
        v-model="value1"
        color="green"
        label="On Right"
        :true-value="dynamicTrueValue"
        :false-value="dynamicFalseValue"
      />
      {{ value1 }}
    </q-card-section>
    <!--select https://quasar.dev/vue-components/option-group-->
    <q-card-section class="col-4 q-mt-md">
      <q-option-group
        v-model="group"
        :options="opts"
        color="green"
        type="checkbox"
      />
      {{ group }}
    </q-card-section>

    <!--slider https://quasar.dev/vue-components/slider-->
    <q-card-section class="col-4 q-mt-md">
      <q-badge color="secondary"> Model: {{ standard }} (0 to 50) </q-badge>
      <q-slider v-model="standard" :min="0" :max="50" />
    </q-card-section>
    <!--range https://quasar.dev/vue-components/range-->
    <q-card-section class="col-4 q-mt-md">
      <q-range
        class="q-mt-xl"
        v-model="range"
        color="deep-orange"
        markers
        :marker-labels="fnMarkerLabel"
        :min="0"
        :max="6"
      />
    </q-card-section>
    <!--range https://quasar.dev/vue-components/range-->
    <q-card-section class="col-8 q-mt-md">
      <div class="row">
        <q-date v-model="pickDate" mask="YYYY-MM-DD HH:mm" color="purple" />
        <q-time
          v-model="toTitleDate"
          mask="YYYY-MM-DD HH:mm"
          color="purple"
          class="q-ml-md"
        />
      </div>
    </q-card-section>
    <!--days https://quasar.dev/vue-components/date-->
    <q-card-section class="col-4 q-mt-md">
      <q-date v-model="days" range multiple color="orange" />
    </q-card-section>
  </div>
  <q-separator />
  <!--Lifecycle Hooks https://vuejs.org/guide/essentials/lifecycle.html-->
  <!--assets https://quasar.dev/quasar-cli-vite/handling-assets#introduction-->
  <!--img https://quasar.dev/vue-components/img#introduction-->
  <div class="row q-mt-md flex-center">
    <q-card-section class="col-8">
      <q-img
        src="~assets/lifecycle.png"
        loading="lazy"
        spinner-color="primary"
        height="100%"
        style="max-width: 100%"
      />
    </q-card-section>
  </div>
  <q-separator />
  <!--watch https://vuejs.org/guide/essentials/watchers.html#basic-example-->
  <div class="row q-mt-md">
    <q-card-section class="col-4">
      <q-input filled label="무엇이든 질문하세요" v-model.trim="question" />
      <q-card-section>{{ answer }}</q-card-section>
    </q-card-section>
    <q-card-section class="col-4">
      <q-input filled label="입력하세요" v-model.trim="some.nested.key" />
      <q-card-section>{{ answer1 }}</q-card-section>
    </q-card-section>
    <q-card-section class="col-4">
      <q-input
        filled
        label="숫자만 입력하세요"
        v-model.number="someObject.nested.key"
        type="number"
      />
      <q-card-section>{{ answer2 }} </q-card-section>
    </q-card-section>
  </div>
  <q-separator />
  <!--refs https://vuejs.org/guide/essentials/template-refs.html-->
  <div class="row q-mt-md">
    <q-card-section class="col-4">
      <q-form
        ref="form"
        v-model="valid"
        @submit="onSave"
        @reset="reset"
        class="q-gutter-md"
        lazy-validation
      >
        <q-input
          filled
          v-model.trim="form.id"
          label="Your id *"
          hint="아이디"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          v-model="form.password"
          label="Your password *"
          filled
          :type="form.isPwd ? 'password' : 'text'"
          hint="Password with toggle"
          autocomplete="on"
        >
          <template v-slot:append>
            <q-icon
              :name="form.isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="form.isPwd = !form.isPwd"
            />
          </template>
        </q-input>

        <q-input
          v-model="form.email"
          filled
          type="email"
          hint="Email"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          v-model="form.tel"
          filled
          type="tel"
          hint="Telephone number"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          v-model="form.url"
          filled
          type="url"
          hint="URL"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          v-model="form.date"
          filled
          type="date"
          hint="Native date"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-toggle
          v-model="form.accept"
          label="I accept the license and terms"
        />
        <div>
          <q-btn label="로그인" type="submit" color="primary" />
          <q-btn
            label="취소"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </q-card-section>
    <!--https://vuejs.org/guide/essentials/component-basics.html#dynamic-components-->
    <q-card-section class="col-4">
      <child ref="child" @onChild="childSave" />
    </q-card-section>

    <q-card-section class="col-4">
      <!--개별 / 그 아래는 for문-->
      <!-- <div :style="{ fontSize : postFontSize +'em'}">
        <BlogPost title="My journey with Vue" @enlarge-text="postFontSize += 0.1"/>
      </div>
      <div :style="{ fontSize : postFontSize +'em'}">
        <BlogPost title="Blogging with Vue" @enlarge-text="postFontSize += 0.1"/>
      </div>
      <div :style="{ fontSize : postFontSize +'em'}">
        <BlogPost title="Why Vue is so fun" @enlarge-text="postFontSize += 0.1"/>
      </div> -->
      <div :style="{ fontSize: postFontSize + 'em' }">
        <blog-post
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          @enlarge-text="postFontSize += 0.1"
        />
      </div>
    </q-card-section>
  </div>
  <q-separator />
  <!--slot https://vuejs.org/guide/essentials/component-basics.html#content-distribution-with-slots-->
  <div class="row q-mt-md">
    <q-card-section class="col-4">
      <q-btn label="open dialog" @click="openDialog()" />

      <dialog-custom ref="dialog">
        <q-card-section>내용 넣기</q-card-section>
      </dialog-custom>
    </q-card-section>

    <!--https://quasar.dev/vue-components/tabs#basic-->
    <q-card-section class="col-8">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey row"
          active-color="primary"
          indicator-color="primary"
          narrow-indicator
        >
          <div v-for="tab in tabs" :key="tab" class="col">
            <q-tab ref="curTab" :name="tab" :label="tab" />
          </div>
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          {{ tab }}
          <!-- <component :is="tab"/> -->
          <q-tab-panel name="Home">
            <div class="text-h6">Home</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="Archive">
            <div class="text-h6">Archive</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="Posts">
            <div class="text-h6">Posts</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-card-section>
    <q-separator />
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-card-section>
      <q-input
        v-model="inputData"
        outlined
        bottom-slots
        label="DebounceEx"
        counter
        :dense="true"
      />
    </q-card-section>
  </div>
  <q-separator />
  <q-card-section class="text-h2">html 클래스 바인딩</q-card-section>
  <div class="row q-mt-md">
    <q-card-section :class="{ active: isActive, 'text-h3': hasError }">
      change color</q-card-section
    >
    <q-card-section :class="classObject"> change color</q-card-section>
    <q-card-section :class="classObj"> change color</q-card-section>
    <q-card-section :class="[activeClass, errorClass]">
      change color</q-card-section
    >
    <q-card-section :class="[isActive ? activeClass : '', errorClass]">
      change color</q-card-section
    >
    <q-card-section :class="[{ active: isActive }, errorClass]">
      change color</q-card-section
    >
    <q-card-section :class="[baz, boo]"> change color</q-card-section>
    <class-child></class-child>
    <class-child :class="[baz, boo]"></class-child>
    <class-child :class="{ active: isActive }"></class-child>
    <class-child id="hi"></class-child>
    <q-card-section :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      change color</q-card-section
    >
    <q-card-section :style="styleObject"> change color</q-card-section>
    <q-card-section :style="[baseStyles, overridingStyles]">
      change color</q-card-section
    >
    <!-- <child :class="[baz, boo]"></child> -->
    <q-separator />
    <div @scroll.passive="onScroll">...</div>
  </div>
</template>

<script>
import { date } from "quasar";
import Child from "components/Child.vue";
import ClassChild from "components/ClassChild.vue";
import BlogPost from "components/BlogPost.vue";
import DialogCustom from "components/DialogCustom.vue";
import Archive from "components/tabs/Archive.vue";
import Home from "components/tabs/Home.vue";
import Posts from "components/tabs/Posts.vue";
import MyComponent from "components/MyComponent.vue";
import { debounce } from "lodash";

export default {
  name: "VueEx",
  title: "Vue Basic",
  components: {
    Child,
    ClassChild,
    BlogPost,
    DialogCustom,
    Archive,
    Home,
    Posts,
    MyComponent,
  },
  data() {
    return {
      msg: "hello Vue",
      rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,
      linkId: "vue",
      link: {
        to: "http://vuejs.org",
        title: "뷰 공식 사이트",
        label: "Vuejs.org",
      },
      isButtonDisabled: true,
      number: 1000,
      message:
        "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
      id: "genie",
      seen: true,
      awesome: true,
      type: "B",
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      firstName: "John",
      lastName: "Doe",
      ok: true,
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }],
      listItems: [{ message: "Foo" }, { message: "Bar" }],
      tupleListItems: [
        { message: "Foo", children: ["baby"] },
        { message: "Bar", children: ["child"] },
      ],
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      count: 0,
      methodCount: 1,
      obj: {
        nested: { count: 0 },
        arr: ["foo", "bar"],
      },
      debouncedClick: null,
      name: "Vue.js",
      text: "",
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      model: null,
      model2: [],
      checkboxToggle: true,
      dynamicTrueValue: "yes",
      dynamicFalseValue: "No",
      color1: "",
      first: "첫번째선택",
      second: "두번째선택",
      nick: "",
      age: "",
      accept: false,
      color: "",
      value: "네",
      value1: "No",
      group: ["op1"],
      opts: [
        {
          label: "Option 1",
          value: "op1",
        },
        {
          label: "Option 2",
          value: "op2",
        },
        {
          label: "Option 3",
          value: "op3",
        },
      ],
      standard: 40,
      range: {
        min: 2,
        max: 4,
      },
      pickDate: this.pickDates(),
      days: [
        { from: "2020/07/01", to: "2020/07/10" },
        { from: "2020/07/21", to: "2020/07/25" },
      ],
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      some: {
        nested: {
          key: "",
        },
      },
      answer1: "",
      someObject: {
        nested: {
          key: "",
        },
      },
      answer2: "",
      valid: false,
      form: {
        id: "",
        password: "",
        accept: false,
        isPwd: true,
        email: "",
        tel: "",
        url: "",
        date: "",
      },
      valid: false,
      title: "",
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
      postFontSize: 1,
      tab: "Home",
      tabs: ["Home", "Posts", "Archive"],
      inputData: null,
      str: "",
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        "text-h3": true,
      },
      error: null,
      activeClass: "active",
      errorClass: "text-danger",
      baz: "baz",
      boo: "boo",
      activeColor: "green",
      fontSize: 30,
      styleObject: {
        color: "red",
        fontSize: "35px",
      },
      baseStyles: {
        textDecorationLine: "underline",
        textDecorationThickness: "5px",
        textDecorationColor: "red",
      },
      overridingStyles: {
        color: "blue",
        fontSize: "35px",
      },
      textArea: "",
    };
  },
  computed: {
    toTitleDate() {
      const timeStamp = Date.now();
      const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
      console.log("formattedString", formattedString);
      return formattedString;
    },
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      // `this`는 컴포넌트 인스턴스를 가리킵니다.
      return this.author.books.length > 0 ? "Yes" : "No";
    },
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        // 참고: 분해 할당 문법을 사용함.
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
    filterItems() {
      return (this.items = this.items.filter((item) =>
        item.message.match(/Foo/)
      ));
    },
    evenNumbers() {
      return this.numbers.filter((n) => n % 2 === 0);
    },
    reverseNumbers() {
      const numbers = this.numbers;
      return [...numbers].reverse();
    },
    classObj() {
      return {
        active: this.isActive && !this.error,
        "text-h3": this.error && this.error.type === "fatal",
      };
    },
  },
  watch: {
    question(newQuestion, oldQuestion) {
      console.log("newQuestion", newQuestion);
      if (newQuestion.endsWith("?")) {
        this.getAnswer();
      }
      this.answer = "Questions usually contain a question mark. ;-)";
    },
    "some.nested.key"(newValue) {
      console.log(newValue);
      this.answer1 = `데이터감지 : watch에서 ${newValue} 받음`;
    },
    someObject: {
      handler(newValue, oldValue) {
        if (this.someObject.nested.key) {
          this.answer2 =
            "handler 사용 깊은 감시 / 데이터감지 : " + newValue.nested.key;
        }
      },
      deep: true,
      immediate: true, //콜백의 즉시 실행 , watch는 lazy가 default 소스가 변경될 때까지 요청하지 않음.
    },
    inputData: debounce(function (newVal, oldVal) {
      //debounce ex
      console.log(newVal, oldVal);
    }, 500),
  },
  mounted() {
    console.log(`the component is now mounted.`);
    // console.log(this.methodCount);
    // this.methodCount = 2;
    // console.log(this.methodCount);
    this.increment();
    this.error = {};
    this.error.type = "fatal";
  },
  methods: {
    calculateBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
    greet(e) {
      console.log("event", e);
      this.$q.notify({
        message: `hello ${this.name}!`,
        caption: "5 minutes ago",
        color: "secondary",
      });
    },
    alert() {
      this.$q
        .dialog({
          title: "Alert",
          message: "Some message",
        })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },

    confirm() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to turn on the wifi?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          // console.log('>>>> OK')
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },

    prompt() {
      this.$q
        .dialog({
          title: "Prompt",
          message: "What is your name?",
          prompt: {
            model: "",
            type: "text", // optional
          },
          cancel: true,
          persistent: true,
        })
        .onOk((data) => {
          console.log(">>>> OK, received", data);
        })
        .onCancel(() => {
          console.log(">>>> Cancel");
        })
        .onDismiss(() => {
          console.log("I am triggered on both OK and Cancel");
        });
    },

    doThis(event) {
      console.log(event);
      this.$q.notify({
        color: "green-5",
        textColor: "white",
        icon: "warning",
        message: `doThis pointerType`,
      });
      console.log("doThis pointerType", event);
    },
    doThat(event) {
      this.$q.notify({
        color: "yellow-5",
        textColor: "white",
        icon: "warning",
        message: `doThat pointerType`,
      });
      console.log("doThat event", event);
    },

    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },

    onReset() {
      this.nick = null;
      this.age = null;
      this.accept = false;
    },

    fnMarkerLabel(val) {
      return `${10 * val}%`;
    },
    pickDates() {
      const timeStamp = Date.now();
      const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
      return formattedString;
    },
    async getAnswer() {
      this.answer = "Thingking...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer;
      } catch (error) {
        this.answer = "Error! Could not reach the API" + error;
      }
    },
    onSave() {
      console.log("onSave", this.form);
      this.$refs.form.validate();
      this.$nextTick(); // 다음으로 처리

      console.log();
      // this.$refs.form.validate();
    },
    reset() {
      console.log("reset");
      this.initForm();
    },
    initForm() {
      const form = {
        id: "",
        password: "",
        accept: false,
        isPwd: true,
        email: "",
        tel: "",
        url: "",
        date: "",
      };
      this.form = form;
    },
    childSave(data) {
      console.log("from child data", data);
      const publicMethod = this.$refs.child.publicMethod;
      // const privateData = this.$refs.child.privateData; // 제외됨
      console.log("publicData data : ", publicMethod());
      // console.log('privateData data : ',privateData()); // 제외됨
    },
    openDialog() {
      this.$refs.dialog.dialog = true;
    },
    calculateDate() {
      setInterval(() => {
        const timeStamp = Date.now();
        // console.log('timeStamp=======',timeStamp)
        const formattedString = date.formatDate(
          timeStamp,
          "YYYY-MM-DD HH:mm:ss"
        );
        this.str = formattedString;
      }, 1000);
      return this.str;
    },
    increment() {
      this.methodCount++;
      console.log(this.methodCount);
    },
    mutateDeeply() {
      // 변경 사항이 감지됩니다.
      this.obj.nested.count++;
      this.obj.arr.push("baz");
    },
    click() {
      console.log(e.message);
    },
    even(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    },
    say(message) {
      this.$q
        .dialog({
          title: "Alert",
          message: `${message}`,
        })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },
    warn(message, event) {
      if (event) {
        event.preventDefault();
        this.$q
          .dialog({
            title: "Alert",
            message: `${message}`,
          })
          .onOk(() => {
            // console.log('OK')
          })
          .onCancel(() => {
            // console.log('Cancel')
          })
          .onDismiss(() => {
            // console.log('I am triggered on both OK and Cancel')
          });
      }
    },
    onScroll(e) {
      console.log("e", e);
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
.active {
  color: red;
}
.text-danger {
  background-color: yellow;
  font-size: 2em;
}
.baz {
  background-color: green;
}
.boo {
  color: pink;
}
#hi {
  font-size: 3em;
  color: darkorchid;
}
</style>
