<template>
  <q-page class="items-center justify-evenly">
    <div class="row">
      <div class="col-12 text-h6">
        <q-btn
          flat
          dense
          round
          icon="arrow_back"
          aria-label="arrow_back"
          @click="historyBack"
        />
        記事詳細
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h5">「{{comparison.subject}}」</div>
          </q-card-section>
          <q-chip icon="bookmark">週刊新潮</q-chip>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <q-list bordered>
          普通はこう考えてしまうけど...
          <q-separator></q-separator>
          <!-- 期待 -->
          <q-item
            clickable="false"
            v-for="expectation in comparison.expectations"
            :key="expectation.id"
          >
            <q-item-section>
              <q-chat-message
                :text="[expectation.message]"
                bg-color="indigo-1"
              />
            </q-item-section>
          </q-item>
          <q-separator></q-separator>
          実際は...
          <q-separator></q-separator>
          <!-- 実際 -->
          <q-expansion-item
            v-for="actuality in comparison.actualities"
            :key="actuality.id"
            :label="actuality.message"
            expand-icon-toggle
          >
            <q-card>
              <q-card-section>
                {{actuality.detail}}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
        <q-btn
          flat
          @click="tweet"
        >
          <q-icon name="fab fa-twitter">
          </q-icon>
        </q-btn>
      </div>
    </div>

  </q-page>
</template>

<script lang="ts">
import { Comparison } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from '@vue/composition-api';
import VueRouter from 'vue-router';
import { openURL } from 'quasar';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup() {
    const comparison = ref<Comparison>({
      id: 12,
      subject: 'ワクチン「アナフィラキシー」90%超が女子　日本人初の死亡者も...',
      citationUrl: 'https://example.com/',
      expectations: [
        {
          id: 1,
          message: 'ワクチン接種したらアナフィラキシーで死んだ人がいるんだな'
        },
        {
          id: 2,
          message:
            '女子はワクチンを接種するとアナフィラキシーになりやすいんだろうな'
        }
      ],
      actualities: [
        {
          id: 1,
          message:
            'ワクチン接種後に死亡した方の死因は「くも膜下出血」と推定される',
          detail:
            '死因として疑われているくも膜下出血は、40～60歳台の方に比較的起こりやすい疾患とされており、今のところ海外における接種事例でも、くも膜下出血と新型コロナワクチンに関連があるとはされていないようである。偶発的な事例かもしれないが、この症例についても更に情報を収集し、今後の審議会で評価していく必要がある。',
          evidenceUrl: 'https://www.mhlw.go.jp/stf/newpage_17104.html'
        }
      ]
    });
    const vueRouter = new VueRouter();
    const historyBack = () => {
      vueRouter.back();
    };
    const tweet = () => {
      openURL('http://example.com');
    };

    return { comparison, historyBack, tweet };
  }
});
</script>
