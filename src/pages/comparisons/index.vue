<template>
  <q-page class="row items-center justify-evenly">

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
  </q-page>

</template>

<script lang="ts">
import { ComparisonListItem, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup() {
    const comparisonListItems = ref<ComparisonListItem[]>([
      {
        id: 1,
        subject: '記事タイトル',
        expectationMessage: '期待するメッセージ'
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
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { comparisonListItems, meta };
  }
});
</script>
