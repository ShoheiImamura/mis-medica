<template>
  <q-page class="items-center justify-evenly">
    <div class="row">
      <div class="col-12 col-md-12 col-sm-12 col-lg-12">
        <div class="text-h6">記事一覧</div>
        <q-separator></q-separator>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <q-list separator>
          <q-item
            clickable
            v-ripple
            v-for="comparisonItem  in comparisonListItems"
            :key=comparisonItem.id
            :to="'/comparisons/' + comparisonItem.id"
          >
            <q-item-section>
              <q-item-label>「{{comparisonItem.subject}}」</q-item-label>
              <q-item-label caption>
                <q-chat-message
                  avatar="https://1.bp.blogspot.com/-eMLID2dYzwM/VwIgW_nlilI/AAAAAAAA5bY/-osLYuNceb4GArB0E5Cl1D4oYMVDNVKIw/s800/question_head_boy.png"
                  :text="[comparisonItem.expectationMessage]"
                  bg-color="indigo-1"
                />
              </q-item-label>
              <q-chat-message
                text=comparisonItem.expectationMessage
                sent
              />

            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

  </q-page>

</template>

<script lang="ts">
import { ComparisonListItem, Meta } from 'components/models';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: {},
  setup() {
    const comparisonListItems = ref<ComparisonListItem[]>([
      {
        id: 1,
        subject:
          'ワクチン「アナフィラキシー」90%超が女子　日本人初の死亡者も...',
        expectationMessage:
          'ワクチン接種したらアナフィラキシーで死んだ人がいるんだな'
      },
      {
        id: 2,
        subject: '記事タイトル',
        expectationMessage: '期待するメッセージ'
      },
      {
        id: 3,
        subject: '記事タイトル',
        expectationMessage: '期待するメッセージ'
      },
      {
        id: 4,
        subject: '記事タイトル',
        expectationMessage: '期待するメッセージ'
      }
    ]);
    // const meta = ref<Meta>({
    //   totalCount: 1200
    // });
    return { comparisonListItems };
  }
});
</script>
